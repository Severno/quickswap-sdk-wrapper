// import {ChainId, Currency, ETHER, Pair, Token, TokenAmount, WETH} from 'quickswap-sdk'
// import {FunctionFragment, Interface} from '@ethersproject/abi';
// import {BigNumber} from '@ethersproject/bignumber';
// import {ethers} from 'ethers'
//
// const alchemy = 'https://polygon-mainnet.g.alchemy.com/v2/qteyaTH9FM30hxyZ1iPHbRLYCb7GG8pM'
// const provider = new ethers.providers.JsonRpcProvider(alchemy)
// const PAIR_INTERFACE = new Interface(IUniswapV2PairABI);
//
// export enum PairState {
//   LOADING,
//   NOT_EXISTS,
//   EXISTS,
//   INVALID,
// }
//
// interface CallResult {
//   readonly valid: boolean;
//   readonly data: string | undefined;
//   readonly blockNumber: number | undefined;
// }
//
// export interface Call {
//   address: string;
//   callData: string;
//   gasRequired?: number;
// }
//
// interface Result extends ReadonlyArray<any> {
//   readonly [key: string]: any;
// }
//
// export interface CallState {
//   readonly valid: boolean;
//   // the result, or undefined if loading or errored/no data
//   readonly result: Result | undefined;
//   // true if the result has never been fetched
//   readonly loading: boolean;
//   // true if the result is not for the latest block
//   readonly syncing: boolean;
//   // true if the call was made and is synced, but the return data is invalid
//   readonly error: boolean;
// }
//
// type MethodArg = string | number | BigNumber;
// type MethodArgs = Array<MethodArg | MethodArg[]>;
//
// interface ListenerOptions {
//   // how often this data should be fetched, by default 1
//   readonly blocksPerFetch?: number;
// }
//
// type OptionalMethodInputs =
//   | Array<MethodArg | MethodArg[] | undefined>
//   | undefined;
//
// function isMethodArg(x: unknown): x is MethodArg {
//   return ['string', 'number'].indexOf(typeof x) !== -1;
// }
//
// function isValidMethodArgs(x: unknown): x is MethodArgs | undefined {
//   return (
//     x === undefined ||
//     (Array.isArray(x) &&
//       x.every(
//         (xi) => isMethodArg(xi) || (Array.isArray(xi) && xi.every(isMethodArg)),
//       ))
//   );
// }
//
// const INVALID_CALL_STATE: CallState = {
//   valid: false,
//   result: undefined,
//   loading: false,
//   syncing: false,
//   error: false,
// };
//
// const LOADING_CALL_STATE: CallState = {
//   valid: true,
//   result: undefined,
//   loading: true,
//   syncing: true,
//   error: false,
// };
//
// const ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;
// const LOWER_HEX_REGEX = /^0x[a-f0-9]*$/;
// export function toCallKey(call: Call): string {
//   if (!ADDRESS_REGEX.test(call.address)) {
//     throw new Error(`Invalid address: ${call.address}`);
//   }
//   if (!LOWER_HEX_REGEX.test(call.callData)) {
//     throw new Error(`Invalid hex: ${call.callData}`);
//   }
//   return `${call.address}-${call.callData}`;
// }
//
// // the lowest level call for subscribing to contract data
// function useCallsData(
//   calls: (Call | undefined)[],
//   options?: ListenerOptions,
// ): CallResult[] {
//   const chainId = ChainId.MATIC
//   const callResults = useSelector<AppState,
//     AppState['multicall']['callResults']>((state) => state.multicall.callResults);
//   const dispatch = useDispatch<AppDispatch>();
//
//   const serializedCallKeys: string =
//     JSON.stringify(
//       calls
//         ?.filter((c): c is Call => Boolean(c))
//         ?.map(toCallKey)
//         ?.sort() ?? [],
//     )
//
//   return calls.map<CallResult>((call) => {
//     if (!chainId || !call) return INVALID_RESULT;
//
//     const result = callResults[chainId]?.[toCallKey(call)];
//     let data;
//     if (result?.data && result?.data !== '0x') {
//       data = result.data;
//     }
//
//     return {valid: true, data, blockNumber: result?.blockNumber};
//   })
// }
//
//
// function toCallState(
//   callResult: CallResult | undefined,
//   contractInterface: Interface | undefined,
//   fragment: FunctionFragment | undefined,
//   latestBlockNumber: number | undefined,
// ): CallState {
//   if (!callResult) return INVALID_CALL_STATE;
//   const {valid, data, blockNumber} = callResult;
//   if (!valid) return INVALID_CALL_STATE;
//   if (valid && !blockNumber) return LOADING_CALL_STATE;
//   if (!contractInterface || !fragment || !latestBlockNumber)
//     return LOADING_CALL_STATE;
//   const success = data && data.length > 2;
//   const syncing = (blockNumber ?? 0) < latestBlockNumber;
//   let result: Result | undefined = undefined;
//   if (success && data) {
//     try {
//       result = contractInterface.decodeFunctionResult(fragment, data);
//     } catch (error) {
//       console.debug('Result data parsing failed', fragment, data);
//       return {
//         valid: true,
//         loading: false,
//         error: true,
//         syncing,
//         result,
//       };
//     }
//   }
//   return {
//     valid: true,
//     loading: false,
//     syncing,
//     result: result,
//     error: !success,
//   };
// }
//
// export function useMultipleContractSingleData(
//   addresses: (string | undefined)[],
//   contractInterface: Interface,
//   methodName: string,
//   callInputs?: OptionalMethodInputs,
//   options?: ListenerOptions,
// ): CallState[] {
//   const fragment = contractInterface.getFunction(methodName)
//   const callData: string | undefined =
//     fragment && isValidMethodArgs(callInputs)
//       ? contractInterface.encodeFunctionData(fragment, callInputs)
//       : undefined
//
//   const calls =
//     fragment && addresses && addresses.length > 0 && callData
//       ? addresses.map<Call | undefined>((address) => {
//         return address && callData
//           ? {
//             address,
//             callData,
//           }
//           : undefined;
//       })
//       : []
//
//   const results = useCallsData(calls, options);
//
//   const latestBlockNumber = useBlockNumber();
//
//   return results.map((result) => {
//     return toCallState(
//       result,
//       contractInterface,
//       fragment,
//       latestBlockNumber,
//     );
//   });
// }
//
// export function wrappedCurrency(
//   currency: Currency | undefined,
//   chainId: ChainId | undefined,
// ): Token | undefined {
//   return chainId && currency === ETHER
//     ? WETH[chainId]
//     : currency instanceof Token && currency.chainId === chainId
//       ? currency
//       : undefined;
// }
//
// export function usePairs(
//   currencies: [Currency | undefined, Currency | undefined][],
// ): [PairState, Pair | null][] {
//   const chainId = ChainId.MATIC
//
//   const tokens =
//     currencies.map(([currencyA, currencyB]) => [
//       wrappedCurrency(currencyA, chainId),
//       wrappedCurrency(currencyB, chainId),
//     ])
//
//   const pairAddresses =
//     tokens.map(([tokenA, tokenB]) => {
//       return tokenA && tokenB && !tokenA.equals(tokenB)
//         ? Pair.getAddress(tokenA, tokenB)
//         : undefined;
//     })
//
//   const results = useMultipleContractSingleData(
//     pairAddresses,
//     PAIR_INTERFACE,
//     'getReserves',
//   );
//
//   return results.map((result, i) => {
//     const {result: reserves, loading} = result;
//     const tokenA = tokens[i][0];
//     const tokenB = tokens[i][1];
//
//     if (loading) return [PairState.LOADING, null];
//     if (!tokenA || !tokenB || tokenA.equals(tokenB))
//       return [PairState.INVALID, null];
//     if (!reserves) return [PairState.NOT_EXISTS, null];
//     const {reserve0, reserve1} = reserves;
//     const [token0, token1] = tokenA.sortsBefore(tokenB)
//       ? [tokenA, tokenB]
//       : [tokenB, tokenA];
//     return [
//       PairState.EXISTS,
//       new Pair(
//         new TokenAmount(token0, reserve0.toString()),
//         new TokenAmount(token1, reserve1.toString()),
//       ),
//     ];
//   });
// }
