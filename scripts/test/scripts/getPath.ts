import {BigintIsh, Pair, Token, TokenAmount, Trade} from 'quickswap-sdk'

declare var module: any;
module.exports = function (callback: (error: any, result: any) => void, pairs: Pair[], tokenA: Token, tokenB: Token, tokenAToSell: BigintIsh) {
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

