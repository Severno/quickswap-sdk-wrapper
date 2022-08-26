import {ChainId, Fetcher, Pair, Token, TokenAmount, Trade} from "quickswap-sdk";
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

const MAI_ADDRESS = '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'
const AAVE_ADDRESS = '0xd6df932a45c0f255f85145f286ea0b292b21c90b'
const ETH_ADDRESS = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
const DAI_ADDRESS = '0x8F3CF7AD23CD3CADBD9735AFF958023239C6A063'
const USDC_ADDRESS = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
const ACRE_ADDRESS = '0x011734f6Ed20E8D011d85Cf7894814B897420acf'

async function bestTradeExactIn(pairs, tokenA, tokenB, tokenAToSell) {
  const newPairs = await getPairs(pairs, tokenAToSell)

  return Trade.bestTradeExactIn(newPairs, new TokenAmount(tokenA, tokenAToSell), tokenB, {
    maxHops: 3,
    maxNumResults: 1,
  })[0] ?? []
}

const file = fs.createWriteStream('getPathResult.txt');

const getPath = async () => {
  const [tokenARaw, tokenBRaw, tokenAMount] = args

  const tokenAData = JSON.parse(tokenARaw)
  const tokenBData = JSON.parse(tokenBRaw)

  const tokenA = new Token(tokenAData.chainId, tokenAData.address, tokenAData.decimals, tokenAData.symbol, tokenAData.name)
  const tokenB = new Token(tokenBData.chainId, tokenBData.address, tokenBData.decimals, tokenBData.symbol, tokenBData.name)

  const bestTradeExactInResult = await bestTradeExactIn(getPairsCombinations(tokenA, tokenB), tokenA, tokenB, tokenAMount)

  file.write(JSON.stringify(bestTradeExactInResult))
  console.log('ppp', JSON.stringify(bestTradeExactInResult))
}

getPath()

const tokenA = {
  decimals: 18,
  symbol: 'WMATIC',
  name: 'Wrapped Matic',
  chainId: 137,
  address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
}

const tokenB = {
  decimals: 18,
  symbol: 'QUICK(OLD)',
  name: 'Quickswap(OLD)',
  chainId: 137,
  address: '0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
}
