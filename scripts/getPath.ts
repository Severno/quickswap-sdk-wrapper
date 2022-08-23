const quickswapSdk =  require('quickswap-sdk')

const {BigintIsh, Pair, Token, TokenAmount, Trade} = quickswapSdk

module.exports =  function (callback: (error: any, result: any) => void, pairs, tokenA, tokenB, tokenAToSell) {
  let result: any;

  if (tokenAToSell && tokenB && pairs.length > 0) {
    result = Trade.bestTradeExactIn(pairs, new TokenAmount(tokenA, tokenAToSell), tokenB, {
      maxHops: 3,
      maxNumResults: 1,
    })[0].route.path ?? []

    callback(null, result)
  }

  callback(null, [])
};
