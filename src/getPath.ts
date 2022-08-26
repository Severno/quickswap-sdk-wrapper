import {ChainId, Fetcher, Pair, TokenAmount, Trade} from "quickswap-sdk";
import {provider} from "./provider";
import {basePairs, bases, GlobalData} from "./constants";

const fs = require('fs')

const args = process.argv.slice(2);

async function getTokenData(tokenAddress: string) {
  return await Fetcher.fetchTokenData(ChainId.MATIC, tokenAddress, provider)
}

async function getPairData(token1, token2) {
  return await Fetcher.fetchPairData(token1, token2, provider)
}

function getPairsCombinations(tokenA, tokenB) {
  return tokenA && tokenB
    ? [
      // the direct pair
      [tokenA, tokenB],
      // token A against all bases
      ...bases.map((base) => [tokenA, base]),
      // token B against all bases
      ...bases.map((base) => [tokenB, base]),
      // each base against all bases
      ...basePairs,
    ]
      .filter((tokens) =>
        Boolean(tokens[0] && tokens[1]),
      )
      .filter(([t0, t1]) => t0.address !== t1.address)
      .filter(([tokenA, tokenB]) => {
        if (!ChainId.MATIC) return true;
        const customBases = GlobalData.bases.CUSTOM_BASES[ChainId.MATIC];
        if (!customBases) return true;

        const customBasesA =
          customBases[tokenA.address];
        const customBasesB =
          customBases[tokenB.address];

        if (!customBasesA && !customBasesB) return true;

        if (
          customBasesA &&
          !(customBasesA).find((base) => tokenB.equals(base))
        )
          return false;
        if (
          customBasesB &&
          !(customBasesB).find((base) => tokenA.equals(base))
        )
          return false;

        return true;
      })
    : []
}

const getPairs = async (pairs, tokenAmount) => {
  return await pairs.reduce(async (accumP, current, index) => {
    const accum = await accumP;
    let pair
    try {
      pair = await Fetcher.fetchPairData(current[0], current[1], provider)
    } catch (e) {
      pair = new Pair(
        new TokenAmount(current[0], tokenAmount),
        new TokenAmount(current[1], tokenAmount),
      )
    }

    return [...accum, pair]

  }, Promise.resolve([]))
}

async function bestTradeExactIn(pairs, tokenA, tokenB, tokenAToSell): Promise<Trade> {
  const newPairs = await getPairs(pairs, tokenAToSell)

  return Trade.bestTradeExactIn(newPairs, new TokenAmount(tokenA, tokenAToSell), tokenB, {
    maxHops: 3,
    maxNumResults: 1,
  })[0]
}

const result = fs.createWriteStream('result.json');
const bestPath = fs.createWriteStream('bestPath.json');
const slippage = fs.createWriteStream('slippage.json');

const getPath = async () => {
  const [tokenAAddress, tokenBAddress, tokenAMount] = args

  const tokenA = await getTokenData(tokenAAddress)
  const tokenB = await getTokenData(tokenBAddress)

  const bestTradeExactInResult = await bestTradeExactIn(getPairsCombinations(tokenA, tokenB), tokenA, tokenB, tokenAMount)

  result.write(JSON.stringify(bestTradeExactInResult))
  bestPath.write(JSON.stringify(bestTradeExactInResult.route.path))
  slippage.write(JSON.stringify(bestTradeExactInResult.priceImpact.toFixed(2)))
  console.log('result', JSON.stringify(bestTradeExactInResult))
  console.log('bestPath', JSON.stringify(bestTradeExactInResult))
  console.log('slippage', JSON.stringify(bestTradeExactInResult))
}

getPath()
