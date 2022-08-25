const {ChainId, Fetcher, Trade, JSBI, Pair, Percent, Token, TokenAmount, WETH} = require("quickswap-sdk");
import {basePairs, bases, GlobalData } from "./constants";
import {provider} from "./provider";

const fs = require('fs')



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

const getPairs = async (pairs) => {
  const newPairs = await pairs.reduce(async (accumP, current, index) => {
    const accum = await accumP;
    let pair
    try {
      pair = await Fetcher.fetchPairData(current[0], current[1], provider)
    } catch (e) {
      pair = new Pair(
        new TokenAmount(current[0], '1000000000000000'),
        new TokenAmount(current[1], '1000000000000000'),
      )
    }


    return [...accum, pair]

  }, Promise.resolve([]));

  return newPairs
}


const MAI_ADDRESS = '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'
const AAVE_ADDRESS = '0xd6df932a45c0f255f85145f286ea0b292b21c90b'
const ETH_ADDRESS = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
const DAI_ADDRESS = '0x8F3CF7AD23CD3CADBD9735AFF958023239C6A063'
const USDC_ADDRESS = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
const ACRE_ADDRESS = '0x011734f6Ed20E8D011d85Cf7894814B897420acf'

// const ETH = await getTokenData(ETH_ADDRESS)
// const AAVE = await getTokenData(AAVE_ADDRESS)
// const DAI = await getTokenData(DAI_ADDRESS)
// const USDC = await getTokenData(USDC_ADDRESS)
// const MAI = await getTokenData(MAI_ADDRESS)
// const ACRE = await getTokenData(ACRE_ADDRESS)

// const PAIR_MAI_ACRE = new qs.Pair(new qs.TokenAmount(MAI, '2000000000000000000'), new qs.TokenAmount(ACRE, '1000000000000000000'))


// const PAIR_MAI_ACRE = await getPairData(MAI, ACRE)

// const PAIR_ETH_DAI = await getPairData(AAVE, ETH)

async function getPath1(pairs, tokenA, tokenB, tokenAToSell) {
  // console.log('pairs', pairs)
  const newPairs = await getPairs(pairs)

  return Trade.bestTradeExactIn(newPairs, tokenAToSell, tokenB, {
    maxHops: 3,
    maxNumResults: 1,
  })[0] ?? []
}


// console.log('getPairs(MAI, ACRE)', getPairs(MAI, ACRE))

const file = fs.createWriteStream('array.txt');
const newFile = fs.createWriteStream('newArray.txt');

const writeToFile = (arr: any[]) => {
  arr.forEach((v) => {
    file.write(JSON.stringify(v) + ',' +'\n');
  });

  file.end();
}
// @ts-ignore
const runPath = async () => {
  const MAI = await getTokenData(MAI_ADDRESS)
  const ACRE = await getTokenData(ACRE_ADDRESS)

  console.log('MAI:', MAI, ACRE, getPairsCombinations(MAI, ACRE))


  writeToFile(getPairsCombinations(MAI, ACRE))


  const ppp = await getPath1(getPairsCombinations(MAI, ACRE), MAI, ACRE, new TokenAmount(MAI, '1000000000000000'))
  console.log('ppp', ppp.route.path)
}


runPath()


