import {ChainId, Currency, ETHER, Fetcher, JSBI, Pair, Percent, Token, TokenAmount, Trade, WETH} from 'quickswap-sdk';
// @ts-ignore
import {abi as IUniswapV2PairABI} from '@uniswap/v2-core/build/IUniswapV2Pair.json';

import flatMap from 'lodash.flatmap'
import {ethers} from 'ethers'
import fs from 'fs'

const results = [
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0201cd8ab05d671bdf3e"
      },
      {
        "type": "BigNumber",
        "hex": "0x01d39ed9efd81726e77a"
      },
      1659565092
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0a1e689465f10e935dacd6"
      },
      {
        "type": "BigNumber",
        "hex": "0x0a05712564b5"
      },
      1659565206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0367195956e7f15f75c18f"
      },
      {
        "type": "BigNumber",
        "hex": "0x035f065d3eb9"
      },
      1659565204
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x9553940a86767cef5a5d"
      },
      {
        "type": "BigNumber",
        "hex": "0x018d4e5d4566ad7a65b5"
      },
      1659565130
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0xaf2f0d64bb1c992a17fe"
      },
      {
        "type": "BigNumber",
        "hex": "0x076448efdd6831270b1939"
      },
      1659564968
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x09719dfffa8ad563652173"
      },
      {
        "type": "BigNumber",
        "hex": "0x0155df9491763381eccc"
      },
      1659565114
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x034f6ec84ad0e33f02ef"
      },
      {
        "type": "BigNumber",
        "hex": "0x03a0f1bc"
      },
      1659564004
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x1c66058d31d3e929cba0"
      },
      {
        "type": "BigNumber",
        "hex": "0x199e0bc0fde31398590c"
      },
      1659565190
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x4abe5bbf2de8a553bb"
      },
      {
        "type": "BigNumber",
        "hex": "0x32f8729057d28ada6c"
      },
      1659564736
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0201cd8ab05d671bdf3e"
      },
      {
        "type": "BigNumber",
        "hex": "0x01d39ed9efd81726e77a"
      },
      1659565092
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0201cd8ab05d671bdf3e"
      },
      {
        "type": "BigNumber",
        "hex": "0x01d39ed9efd81726e77a"
      },
      1659565092
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0985fded7574"
      },
      {
        "type": "BigNumber",
        "hex": "0x08b7decb43c32465e0b830"
      },
      1659564342
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x545ca6c3ec2551e3bf4c"
      },
      {
        "type": "BigNumber",
        "hex": "0x5c34f6ea48"
      },
      1659564338
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x071c298c83673b15"
      },
      {
        "type": "BigNumber",
        "hex": "0x0269a9b84a192e875a"
      },
      1659564936
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "error": true
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x17d3a7c2e0d1079c"
      },
      {
        "type": "BigNumber",
        "hex": "0x996dca7cb52b4516dc"
      },
      1659564338
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x06db0b"
      },
      {
        "type": "BigNumber",
        "hex": "0x05b76df7055b1fd0ea"
      },
      1659517815
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x90f3a7cb19b8070754c4"
      },
      {
        "type": "BigNumber",
        "hex": "0x91dcfaf8f9e48718e90d"
      },
      1659564936
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x7a83fc21"
      },
      {
        "type": "BigNumber",
        "hex": "0xa361785d"
      },
      1659221119
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0a1e689465f10e935dacd6"
      },
      {
        "type": "BigNumber",
        "hex": "0x0a05712564b5"
      },
      1659565206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0367195956e7f15f75c18f"
      },
      {
        "type": "BigNumber",
        "hex": "0x035f065d3eb9"
      },
      1659565204
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x9553940a86767cef5a5d"
      },
      {
        "type": "BigNumber",
        "hex": "0x018d4e5d4566ad7a65b5"
      },
      1659565130
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0xaf2f0d64bb1c992a17fe"
      },
      {
        "type": "BigNumber",
        "hex": "0x076448efdd6831270b1939"
      },
      1659564968
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x09719dfffa8ad563652173"
      },
      {
        "type": "BigNumber",
        "hex": "0x0155df9491763381eccc"
      },
      1659565114
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x034f6ec84ad0e33f02ef"
      },
      {
        "type": "BigNumber",
        "hex": "0x03a0f1bc"
      },
      1659564004
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x1c66058d31d3e929cba0"
      },
      {
        "type": "BigNumber",
        "hex": "0x199e0bc0fde31398590c"
      },
      1659565190
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x4abe5bbf2de8a553bb"
      },
      {
        "type": "BigNumber",
        "hex": "0x32f8729057d28ada6c"
      },
      1659564736
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0201cd8ab05d671bdf3e"
      },
      {
        "type": "BigNumber",
        "hex": "0x01d39ed9efd81726e77a"
      },
      1659565092
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0a1e689465f10e935dacd6"
      },
      {
        "type": "BigNumber",
        "hex": "0x0a05712564b5"
      },
      1659565206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x052535c9c27f"
      },
      {
        "type": "BigNumber",
        "hex": "0x05222900b76b"
      },
      1659565188
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x46a5408ba0"
      },
      {
        "type": "BigNumber",
        "hex": "0xbd0db2743fdef39740"
      },
      1659565130
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x26739c031e"
      },
      {
        "type": "BigNumber",
        "hex": "0x01a2884b9773cfad88627e"
      },
      1659564968
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0a5a83643c6d"
      },
      {
        "type": "BigNumber",
        "hex": "0x017a0c21e7dbecd87d6e"
      },
      1659565206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x02cacfdd6d"
      },
      {
        "type": "BigNumber",
        "hex": "0x0287b8e7d198"
      },
      1659565206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0341ab30e82c"
      },
      {
        "type": "BigNumber",
        "hex": "0x02f49550544958cf414c4f"
      },
      1659565114
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x028526785681"
      },
      {
        "type": "BigNumber",
        "hex": "0x01b94b1d6aeee7699c53b5"
      },
      1659565058
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0985fded7574"
      },
      {
        "type": "BigNumber",
        "hex": "0x08b7decb43c32465e0b830"
      },
      1659564342
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0367195956e7f15f75c18f"
      },
      {
        "type": "BigNumber",
        "hex": "0x035f065d3eb9"
      },
      1659565204
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x052535c9c27f"
      },
      {
        "type": "BigNumber",
        "hex": "0x05222900b76b"
      },
      1659565188
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0ca91313418fc405"
      },
      {
        "type": "BigNumber",
        "hex": "0x04bb7a03"
      },
      1659562206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x02edc888fd8aa52e47"
      },
      {
        "type": "BigNumber",
        "hex": "0x462709"
      },
      1659557976
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x8a2c0e46eede6475db"
      },
      {
        "type": "BigNumber",
        "hex": "0x03ca1edeab4d"
      },
      1659565206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x048cfe"
      },
      {
        "type": "BigNumber",
        "hex": "0x0424e612"
      },
      1659563748
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x14e7ea4054576073e7b7"
      },
      {
        "type": "BigNumber",
        "hex": "0x1701f1b5dd"
      },
      1659565148
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x9dc12c1f3e34db70"
      },
      {
        "type": "BigNumber",
        "hex": "0xe61a65"
      },
      1659560740
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x545ca6c3ec2551e3bf4c"
      },
      {
        "type": "BigNumber",
        "hex": "0x5c34f6ea48"
      },
      1659564338
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x9553940a86767cef5a5d"
      },
      {
        "type": "BigNumber",
        "hex": "0x018d4e5d4566ad7a65b5"
      },
      1659565130
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x46a5408ba0"
      },
      {
        "type": "BigNumber",
        "hex": "0xbd0db2743fdef39740"
      },
      1659565130
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0ca91313418fc405"
      },
      {
        "type": "BigNumber",
        "hex": "0x04bb7a03"
      },
      1659562206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x22f7d26ffce4490f"
      },
      {
        "type": "BigNumber",
        "hex": "0x8c9d1c43cdd52019e1"
      },
      1659537133
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x060ca607e590e07485"
      },
      {
        "type": "BigNumber",
        "hex": "0x718dd6b90f6b675cf7"
      },
      1659564338
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0c6669"
      },
      {
        "type": "BigNumber",
        "hex": "0x1e190fc6460de517"
      },
      1659553904
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x4fb708a6ca72dd10"
      },
      {
        "type": "BigNumber",
        "hex": "0x1b069fe75d8d6e5cad"
      },
      1659564116
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x1cebebb36b0b5c3552f1"
      },
      {
        "type": "BigNumber",
        "hex": "0x70b6083bf5f59f4df8"
      },
      1659563566
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x071c298c83673b15"
      },
      {
        "type": "BigNumber",
        "hex": "0x0269a9b84a192e875a"
      },
      1659564936
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0xaf2f0d64bb1c992a17fe"
      },
      {
        "type": "BigNumber",
        "hex": "0x076448efdd6831270b1939"
      },
      1659564968
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x26739c031e"
      },
      {
        "type": "BigNumber",
        "hex": "0x01a2884b9773cfad88627e"
      },
      1659564968
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x02edc888fd8aa52e47"
      },
      {
        "type": "BigNumber",
        "hex": "0x462709"
      },
      1659557976
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x22f7d26ffce4490f"
      },
      {
        "type": "BigNumber",
        "hex": "0x8c9d1c43cdd52019e1"
      },
      1659537133
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x172385612058703d75"
      },
      {
        "type": "BigNumber",
        "hex": "0x06e321736dca376cea01d1"
      },
      1659564018
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "error": true
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "error": true
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x089ee501ca9aeb"
      },
      {
        "type": "BigNumber",
        "hex": "0x8be53f6d6e57cb"
      },
      1659404040
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "error": true
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x09719dfffa8ad563652173"
      },
      {
        "type": "BigNumber",
        "hex": "0x0155df9491763381eccc"
      },
      1659565114
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0a5a83643c6d"
      },
      {
        "type": "BigNumber",
        "hex": "0x017a0c21e7dbecd87d6e"
      },
      1659565206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x8a2c0e46eede6475db"
      },
      {
        "type": "BigNumber",
        "hex": "0x03ca1edeab4d"
      },
      1659565206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x060ca607e590e07485"
      },
      {
        "type": "BigNumber",
        "hex": "0x718dd6b90f6b675cf7"
      },
      1659564338
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x172385612058703d75"
      },
      {
        "type": "BigNumber",
        "hex": "0x06e321736dca376cea01d1"
      },
      1659564018
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0650912cec"
      },
      {
        "type": "BigNumber",
        "hex": "0xd0c2365a42f96efc89"
      },
      1659565124
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x7a1d52796bb25919c6"
      },
      {
        "type": "BigNumber",
        "hex": "0x030bd662a1981a779f0cde"
      },
      1659565206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x4928b6605f836de6f8e3"
      },
      {
        "type": "BigNumber",
        "hex": "0x0f2eaf65a58de5fba1"
      },
      1659565142
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x17d3a7c2e0d1079c"
      },
      {
        "type": "BigNumber",
        "hex": "0x996dca7cb52b4516dc"
      },
      1659564338
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x034f6ec84ad0e33f02ef"
      },
      {
        "type": "BigNumber",
        "hex": "0x03a0f1bc"
      },
      1659564004
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x02cacfdd6d"
      },
      {
        "type": "BigNumber",
        "hex": "0x0287b8e7d198"
      },
      1659565206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x048cfe"
      },
      {
        "type": "BigNumber",
        "hex": "0x0424e612"
      },
      1659563748
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0c6669"
      },
      {
        "type": "BigNumber",
        "hex": "0x1e190fc6460de517"
      },
      1659553904
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "error": true
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0650912cec"
      },
      {
        "type": "BigNumber",
        "hex": "0xd0c2365a42f96efc89"
      },
      1659565124
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x035685"
      },
      {
        "type": "BigNumber",
        "hex": "0x02c53b5515ec7c61fe"
      },
      1659553658
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x1ae4"
      },
      {
        "type": "BigNumber",
        "hex": "0x107657b7fa7f4bd0"
      },
      1659468211
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x06db0b"
      },
      {
        "type": "BigNumber",
        "hex": "0x05b76df7055b1fd0ea"
      },
      1659517815
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x1c66058d31d3e929cba0"
      },
      {
        "type": "BigNumber",
        "hex": "0x199e0bc0fde31398590c"
      },
      1659565190
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0341ab30e82c"
      },
      {
        "type": "BigNumber",
        "hex": "0x02f49550544958cf414c4f"
      },
      1659565114
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x14e7ea4054576073e7b7"
      },
      {
        "type": "BigNumber",
        "hex": "0x1701f1b5dd"
      },
      1659565148
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x4fb708a6ca72dd10"
      },
      {
        "type": "BigNumber",
        "hex": "0x1b069fe75d8d6e5cad"
      },
      1659564116
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "error": true
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x7a1d52796bb25919c6"
      },
      {
        "type": "BigNumber",
        "hex": "0x030bd662a1981a779f0cde"
      },
      1659565206
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x035685"
      },
      {
        "type": "BigNumber",
        "hex": "0x02c53b5515ec7c61fe"
      },
      1659553658
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x01f7f01b21be81e8a3"
      },
      {
        "type": "BigNumber",
        "hex": "0x029db5915a1c357db6"
      },
      1659559878
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x90f3a7cb19b8070754c4"
      },
      {
        "type": "BigNumber",
        "hex": "0x91dcfaf8f9e48718e90d"
      },
      1659564936
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x4abe5bbf2de8a553bb"
      },
      {
        "type": "BigNumber",
        "hex": "0x32f8729057d28ada6c"
      },
      1659564736
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x028526785681"
      },
      {
        "type": "BigNumber",
        "hex": "0x01b94b1d6aeee7699c53b5"
      },
      1659565058
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x9dc12c1f3e34db70"
      },
      {
        "type": "BigNumber",
        "hex": "0xe61a65"
      },
      1659560740
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x1cebebb36b0b5c3552f1"
      },
      {
        "type": "BigNumber",
        "hex": "0x70b6083bf5f59f4df8"
      },
      1659563566
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x089ee501ca9aeb"
      },
      {
        "type": "BigNumber",
        "hex": "0x8be53f6d6e57cb"
      },
      1659404040
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x4928b6605f836de6f8e3"
      },
      {
        "type": "BigNumber",
        "hex": "0x0f2eaf65a58de5fba1"
      },
      1659565142
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x1ae4"
      },
      {
        "type": "BigNumber",
        "hex": "0x107657b7fa7f4bd0"
      },
      1659468211
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x01f7f01b21be81e8a3"
      },
      {
        "type": "BigNumber",
        "hex": "0x029db5915a1c357db6"
      },
      1659559878
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x7a83fc21"
      },
      {
        "type": "BigNumber",
        "hex": "0xa361785d"
      },
      1659221119
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0201cd8ab05d671bdf3e"
      },
      {
        "type": "BigNumber",
        "hex": "0x01d39ed9efd81726e77a"
      },
      1659565092
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x0985fded7574"
      },
      {
        "type": "BigNumber",
        "hex": "0x08b7decb43c32465e0b830"
      },
      1659564342
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x545ca6c3ec2551e3bf4c"
      },
      {
        "type": "BigNumber",
        "hex": "0x5c34f6ea48"
      },
      1659564338
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x071c298c83673b15"
      },
      {
        "type": "BigNumber",
        "hex": "0x0269a9b84a192e875a"
      },
      1659564936
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "error": true
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x17d3a7c2e0d1079c"
      },
      {
        "type": "BigNumber",
        "hex": "0x996dca7cb52b4516dc"
      },
      1659564338
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x06db0b"
      },
      {
        "type": "BigNumber",
        "hex": "0x05b76df7055b1fd0ea"
      },
      1659517815
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x90f3a7cb19b8070754c4"
      },
      {
        "type": "BigNumber",
        "hex": "0x91dcfaf8f9e48718e90d"
      },
      1659564936
    ],
    "error": false
  },
  {
    "valid": true,
    "loading": false,
    "syncing": true,
    "result": [
      {
        "type": "BigNumber",
        "hex": "0x7a83fc21"
      },
      {
        "type": "BigNumber",
        "hex": "0xa361785d"
      },
      1659221119
    ],
    "error": false
  }
]
const finalResults = [
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x7805B64e2d99412d3b8F10Dfe8fc55217C5cc954"
      },
      "tokenAmounts": [
        {
          "numerator": [
            415320654,
            658304938,
            8244
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            659275882,
            461449337,
            7460
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1054233118,
            439652639,
            10629097
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            753354974,
            10243
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x604229c960e5CACF2aaEAc8Be68Ac07BA9dF81c3"
      },
      "tokenAmounts": [
        {
          "numerator": [
            359248162,
            337420813,
            3574721
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            699601971,
            3445
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x019ba0325f1988213D448b3472fA1cf8D07618d7"
      },
      "tokenAmounts": [
        {
          "numerator": [
            610550028,
            833366958,
            612128
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            990577126,
            913738796,
            6351
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xF3eB2f17eAFBf35e92C965A954c6e7693187057D"
      },
      "tokenAmounts": [
        {
          "numerator": [
            854082701,
            924916156,
            717842
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            694575160,
            231362191,
            7747677
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xadbF1854e5883eB8aa7BAf50705338739e558E5b"
      },
      "tokenAmounts": [
        {
          "numerator": [
            540631570,
            796794622,
            9920775
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            337125050,
            1050938995,
            5459
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xf6B87181BF250af082272E3f448eC3238746Ce3D"
      },
      "tokenAmounts": [
        {
          "numerator": [
            829601775,
            347672502,
            13571
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            60823836
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xEEf611894CeaE652979C9D0DaE1dEb597790C6eE"
      },
      "tokenAmounts": [
        {
          "numerator": [
            556093203,
            449777362,
            116602
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            846589161,
            879677381,
            104675
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x1366c529a133D4153211410126F12Aa4e31AaAc5"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1050591105,
            565507246,
            1201
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            703699666,
            779543446,
            811
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x7805B64e2d99412d3b8F10Dfe8fc55217C5cc954"
      },
      "tokenAmounts": [
        {
          "numerator": [
            415320654,
            658304938,
            8244
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            659275882,
            461449337,
            7460
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x7805B64e2d99412d3b8F10Dfe8fc55217C5cc954"
      },
      "tokenAmounts": [
        {
          "numerator": [
            415320654,
            658304938,
            8244
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            659275882,
            461449337,
            7460
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x160532D2536175d65C03B97b0630A9802c274daD"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1069048241,
            9751
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            331177335,
            563941729,
            9141714
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xE89faE1B4AdA2c869f05a0C96C87022DaDC7709a"
      },
      "tokenAmounts": [
        {
          "numerator": [
            300138316,
            454013077,
            345546
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          }
        },
        {
          "numerator": [
            888597064,
            368
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x4E74922aed548E0CbC115c0a0789Ede0bbde766e"
      },
      "tokenAmounts": [
        {
          "numerator": [
            57096981,
            477144626
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        },
        {
          "numerator": [
            422479706,
            648470824,
            38
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          }
        }
      ]
    }
  ],
  [
    1,
    null
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xCF2aBFf7B321CCAaaF4faca391Aa4Ffc87EfEc13"
      },
      "tokenAmounts": [
        {
          "numerator": [
            592246341,
            525807581,
            1
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        },
        {
          "numerator": [
            68462197,
            3205087,
            2454
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x95BDb9423c5093C5C71b878e3102E2B0258Ad3A6"
      },
      "tokenAmounts": [
        {
          "numerator": [
            449291
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            455069930,
            498588693,
            91
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x74214F5d8AA71b8dc921D8A963a1Ba3605050781"
      },
      "tokenAmounts": [
        {
          "numerator": [
            117920964,
            523003616,
            593722
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        },
        {
          "numerator": [
            119073037,
            736356242,
            597455
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x2EEAeC1544f356E41d9Eef17A373188386b34A56"
      },
      "tokenAmounts": [
        {
          "numerator": [
            981728289,
            1
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            593590365,
            2
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "MAI",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
            "tokenInfo": {
              "name": "MAI",
              "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1",
              "symbol": "MAI",
              "decimals": 18,
              "chainId": 137,
              "logoURI": "https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png"
            },
            "tags": []
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1054233118,
            439652639,
            10629097
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            753354974,
            10243
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x604229c960e5CACF2aaEAc8Be68Ac07BA9dF81c3"
      },
      "tokenAmounts": [
        {
          "numerator": [
            359248162,
            337420813,
            3574721
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            699601971,
            3445
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x019ba0325f1988213D448b3472fA1cf8D07618d7"
      },
      "tokenAmounts": [
        {
          "numerator": [
            610550028,
            833366958,
            612128
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            990577126,
            913738796,
            6351
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xF3eB2f17eAFBf35e92C965A954c6e7693187057D"
      },
      "tokenAmounts": [
        {
          "numerator": [
            854082701,
            924916156,
            717842
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            694575160,
            231362191,
            7747677
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xadbF1854e5883eB8aa7BAf50705338739e558E5b"
      },
      "tokenAmounts": [
        {
          "numerator": [
            540631570,
            796794622,
            9920775
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            337125050,
            1050938995,
            5459
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xf6B87181BF250af082272E3f448eC3238746Ce3D"
      },
      "tokenAmounts": [
        {
          "numerator": [
            829601775,
            347672502,
            13571
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            60823836
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xEEf611894CeaE652979C9D0DaE1dEb597790C6eE"
      },
      "tokenAmounts": [
        {
          "numerator": [
            556093203,
            449777362,
            116602
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            846589161,
            879677381,
            104675
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x1366c529a133D4153211410126F12Aa4e31AaAc5"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1050591105,
            565507246,
            1201
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            703699666,
            779543446,
            811
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x7805B64e2d99412d3b8F10Dfe8fc55217C5cc954"
      },
      "tokenAmounts": [
        {
          "numerator": [
            415320654,
            658304938,
            8244
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            659275882,
            461449337,
            7460
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1054233118,
            439652639,
            10629097
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            753354974,
            10243
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x2cF7252e74036d1Da831d11089D326296e64a728"
      },
      "tokenAmounts": [
        {
          "numerator": [
            749002269,
            5268
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            843858738,
            5256
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x1F1E4c845183EF6d50E9609F16f6f9cAE43BC9Cb"
      },
      "tokenAmounts": [
        {
          "numerator": [
            357455523,
            282
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            632167860,
            572875063,
            3027
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x747375305B825c49FB97eE0AC09d19Ec9Ef94BD2"
      },
      "tokenAmounts": [
        {
          "numerator": [
            865862430,
            153
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            763912830,
            777899838,
            1714308
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1058108777,
            10600
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            103777558,
            399327514,
            6049
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xF6a637525402643B0654a54bEAd2Cb9A83C8B498"
      },
      "tokenAmounts": [
        {
          "numerator": [
            194452499,
            11
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            85546546,
            2588
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xf04adBF75cDFc5eD26eeA4bbbb991DB002036Bdd"
      },
      "tokenAmounts": [
        {
          "numerator": [
            25717615,
            3336
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            441652810,
            957795703,
            3097759
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x096C5CCb33cFc5732Bcd1f3195C13dBeFC4c82f4"
      },
      "tokenAmounts": [
        {
          "numerator": [
            412332485,
            2580
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            437887956,
            120059472,
            1807791
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x160532D2536175d65C03B97b0630A9802c274daD"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1069048241,
            9751
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            331177335,
            563941729,
            9141714
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x604229c960e5CACF2aaEAc8Be68Ac07BA9dF81c3"
      },
      "tokenAmounts": [
        {
          "numerator": [
            359248162,
            337420813,
            3574721
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            699601971,
            3445
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x2cF7252e74036d1Da831d11089D326296e64a728"
      },
      "tokenAmounts": [
        {
          "numerator": [
            749002269,
            5268
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            843858738,
            5256
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x7641F96A2B7b4708bc9E8F4D7ca08E232C31A3Dd"
      },
      "tokenAmounts": [
        {
          "numerator": [
            26199045,
            849628237
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        },
        {
          "numerator": [
            79395331
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x7F06EE760A7F604B84836B1bF700B984aCD5d4c6"
      },
      "tokenAmounts": [
        {
          "numerator": [
            178597447,
            924984310,
            46
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        },
        {
          "numerator": [
            4597513
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xF6422B997c7F54D1c6a6e103bcb1499EeA0a7046"
      },
      "tokenAmounts": [
        {
          "numerator": [
            235302257,
            943124688,
            2211
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        },
        {
          "numerator": [
            560665259,
            3878
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x7847350B4C25f564B5a165389fDCeEA99e1ED3BD"
      },
      "tokenAmounts": [
        {
          "numerator": [
            298238
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            69527058
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x59153f27eeFE07E5eCE4f9304EBBa1DA6F53CA88"
      },
      "tokenAmounts": [
        {
          "numerator": [
            544466871,
            687952221,
            85630
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        },
        {
          "numerator": [
            32617949,
            92
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x80a8da33C8E5e4627846f0E82b082b342db8D87C"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1043651440,
            923054204,
            9
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            15080037
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xE89faE1B4AdA2c869f05a0C96C87022DaDC7709a"
      },
      "tokenAmounts": [
        {
          "numerator": [
            300138316,
            454013077,
            345546
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        },
        {
          "numerator": [
            888597064,
            368
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x019ba0325f1988213D448b3472fA1cf8D07618d7"
      },
      "tokenAmounts": [
        {
          "numerator": [
            610550028,
            833366958,
            612128
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            990577126,
            913738796,
            6351
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x1F1E4c845183EF6d50E9609F16f6f9cAE43BC9Cb"
      },
      "tokenAmounts": [
        {
          "numerator": [
            357455523,
            282
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            632167860,
            572875063,
            3027
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x7641F96A2B7b4708bc9E8F4D7ca08E232C31A3Dd"
      },
      "tokenAmounts": [
        {
          "numerator": [
            26199045,
            849628237
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        },
        {
          "numerator": [
            79395331
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x6129708748F9FbfD4B621418eE968e8246E2867D"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1021593871,
            199182783,
            2
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        },
        {
          "numerator": [
            354425313,
            879824695,
            2249
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x1Bd06B96dd42AdA85fDd0795f3B4A79DB914ADD5"
      },
      "tokenAmounts": [
        {
          "numerator": [
            142144105,
            849374214,
            96
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        },
        {
          "numerator": [
            302103676,
            918922544,
            1816
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xFA776CB50B9FdbC604709C7b39265a62a4Fce481"
      },
      "tokenAmounts": [
        {
          "numerator": [
            812649
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            101573911,
            946093849,
            1
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x02E0e14D65175420fB12AcD325A7Be456bc22005"
      },
      "tokenAmounts": [
        {
          "numerator": [
            175299856,
            1054614171,
            4
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        },
        {
          "numerator": [
            225336493,
            444570998,
            432
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x8B1Fd78ad67c7da09B682c5392b65CA7CaA101B9"
      },
      "tokenAmounts": [
        {
          "numerator": [
            314439914,
            228157912,
            118289
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            1072195259,
            32587726,
            1806
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x4E74922aed548E0CbC115c0a0789Ede0bbde766e"
      },
      "tokenAmounts": [
        {
          "numerator": [
            57096981,
            477144626
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        },
        {
          "numerator": [
            422479706,
            648470824,
            38
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xF3eB2f17eAFBf35e92C965A954c6e7693187057D"
      },
      "tokenAmounts": [
        {
          "numerator": [
            854082701,
            924916156,
            717842
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            694575160,
            231362191,
            7747677
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x747375305B825c49FB97eE0AC09d19Ec9Ef94BD2"
      },
      "tokenAmounts": [
        {
          "numerator": [
            865862430,
            153
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            763912830,
            777899838,
            1714308
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x7F06EE760A7F604B84836B1bF700B984aCD5d4c6"
      },
      "tokenAmounts": [
        {
          "numerator": [
            178597447,
            924984310,
            46
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        },
        {
          "numerator": [
            4597513
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x6129708748F9FbfD4B621418eE968e8246E2867D"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1021593871,
            199182783,
            2
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        },
        {
          "numerator": [
            354425313,
            879824695,
            2249
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x60e70705b52a4A5bDc1d8614426bA5016a68aB38"
      },
      "tokenAmounts": [
        {
          "numerator": [
            587998481,
            66754181,
            370
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        },
        {
          "numerator": [
            33918217,
            847402143,
            7224873
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        }
      ]
    }
  ],
  [
    1,
    null
  ],
  [
    1,
    null
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xBA4cf8068388Efa75a65aC5030711c7231f47F33"
      },
      "tokenAmounts": [
        {
          "numerator": [
            30055147,
            2259860
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            762206155,
            36672765
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        }
      ]
    }
  ],
  [
    1,
    null
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xadbF1854e5883eB8aa7BAf50705338739e558E5b"
      },
      "tokenAmounts": [
        {
          "numerator": [
            540631570,
            796794622,
            9920775
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            337125050,
            1050938995,
            5459
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1058108777,
            10600
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            103777558,
            399327514,
            6049
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xF6422B997c7F54D1c6a6e103bcb1499EeA0a7046"
      },
      "tokenAmounts": [
        {
          "numerator": [
            235302257,
            943124688,
            2211
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        },
        {
          "numerator": [
            560665259,
            3878
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x1Bd06B96dd42AdA85fDd0795f3B4A79DB914ADD5"
      },
      "tokenAmounts": [
        {
          "numerator": [
            142144105,
            849374214,
            96
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        },
        {
          "numerator": [
            302103676,
            918922544,
            1816
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x60e70705b52a4A5bDc1d8614426bA5016a68aB38"
      },
      "tokenAmounts": [
        {
          "numerator": [
            587998481,
            66754181,
            370
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        },
        {
          "numerator": [
            33918217,
            847402143,
            7224873
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xdC9232E2Df177d7a12FdFf6EcBAb114E2231198D"
      },
      "tokenAmounts": [
        {
          "numerator": [
            277878316,
            25
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            174999256,
            157930817,
            3340
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x4A35582a710E1F4b2030A3F826DA20BfB6703C09"
      },
      "tokenAmounts": [
        {
          "numerator": [
            468581423,
            322063868,
            1955
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        },
        {
          "numerator": [
            982303515,
            353133102,
            3191824
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xcCB9d2100037f1253e6C1682AdF7dC9944498AFF"
      },
      "tokenAmounts": [
        {
          "numerator": [
            874927905,
            501709542,
            299304
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            929343920,
            221999963,
            243
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xCF2aBFf7B321CCAaaF4faca391Aa4Ffc87EfEc13"
      },
      "tokenAmounts": [
        {
          "numerator": [
            592246341,
            525807581,
            1
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        },
        {
          "numerator": [
            68462197,
            3205087,
            2454
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xf6B87181BF250af082272E3f448eC3238746Ce3D"
      },
      "tokenAmounts": [
        {
          "numerator": [
            829601775,
            347672502,
            13571
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            60823836
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xF6a637525402643B0654a54bEAd2Cb9A83C8B498"
      },
      "tokenAmounts": [
        {
          "numerator": [
            194452499,
            11
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            85546546,
            2588
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x7847350B4C25f564B5a165389fDCeEA99e1ED3BD"
      },
      "tokenAmounts": [
        {
          "numerator": [
            298238
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            69527058
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xFA776CB50B9FdbC604709C7b39265a62a4Fce481"
      },
      "tokenAmounts": [
        {
          "numerator": [
            812649
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            101573911,
            946093849,
            1
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        }
      ]
    }
  ],
  [
    1,
    null
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xdC9232E2Df177d7a12FdFf6EcBAb114E2231198D"
      },
      "tokenAmounts": [
        {
          "numerator": [
            277878316,
            25
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            174999256,
            157930817,
            3340
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xfB7910710F8288143445912c575B9F4b37564351"
      },
      "tokenAmounts": [
        {
          "numerator": [
            218757
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            746349054,
            351097943,
            44
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xB45a79b714040C0937aD34A6e3aA4fa96a5704f4"
      },
      "tokenAmounts": [
        {
          "numerator": [
            6884
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            981421008,
            31022815,
            1
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x95BDb9423c5093C5C71b878e3102E2B0258Ad3A6"
      },
      "tokenAmounts": [
        {
          "numerator": [
            449291
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            455069930,
            498588693,
            91
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xEEf611894CeaE652979C9D0DaE1dEb597790C6eE"
      },
      "tokenAmounts": [
        {
          "numerator": [
            556093203,
            449777362,
            116602
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            846589161,
            879677381,
            104675
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xf04adBF75cDFc5eD26eeA4bbbb991DB002036Bdd"
      },
      "tokenAmounts": [
        {
          "numerator": [
            25717615,
            3336
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            441652810,
            957795703,
            3097759
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x59153f27eeFE07E5eCE4f9304EBBa1DA6F53CA88"
      },
      "tokenAmounts": [
        {
          "numerator": [
            544466871,
            687952221,
            85630
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        },
        {
          "numerator": [
            32617949,
            92
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x02E0e14D65175420fB12AcD325A7Be456bc22005"
      },
      "tokenAmounts": [
        {
          "numerator": [
            175299856,
            1054614171,
            4
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        },
        {
          "numerator": [
            225336493,
            444570998,
            432
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    1,
    null
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x4A35582a710E1F4b2030A3F826DA20BfB6703C09"
      },
      "tokenAmounts": [
        {
          "numerator": [
            468581423,
            322063868,
            1955
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        },
        {
          "numerator": [
            982303515,
            353133102,
            3191824
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xfB7910710F8288143445912c575B9F4b37564351"
      },
      "tokenAmounts": [
        {
          "numerator": [
            218757
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            746349054,
            351097943,
            44
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xE8661Fd61A7154899545dC02B52E15d12377a764"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1048701091,
            532704390,
            31
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            473267638,
            920012136,
            41
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x74214F5d8AA71b8dc921D8A963a1Ba3605050781"
      },
      "tokenAmounts": [
        {
          "numerator": [
            117920964,
            523003616,
            593722
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        },
        {
          "numerator": [
            119073037,
            736356242,
            597455
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x1366c529a133D4153211410126F12Aa4e31AaAc5"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1050591105,
            565507246,
            1201
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            703699666,
            779543446,
            811
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x096C5CCb33cFc5732Bcd1f3195C13dBeFC4c82f4"
      },
      "tokenAmounts": [
        {
          "numerator": [
            412332485,
            2580
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            437887956,
            120059472,
            1807791
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x80a8da33C8E5e4627846f0E82b082b342db8D87C"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1043651440,
            923054204,
            9
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            15080037
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x8B1Fd78ad67c7da09B682c5392b65CA7CaA101B9"
      },
      "tokenAmounts": [
        {
          "numerator": [
            314439914,
            228157912,
            118289
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            1072195259,
            32587726,
            1806
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xBA4cf8068388Efa75a65aC5030711c7231f47F33"
      },
      "tokenAmounts": [
        {
          "numerator": [
            30055147,
            2259860
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            762206155,
            36672765
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(NEW)",
            "name": "QuickSwap(NEW)",
            "chainId": 137,
            "address": "0xB5C064F955D8e7F38fE0460C556a72987494eE17"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xcCB9d2100037f1253e6C1682AdF7dC9944498AFF"
      },
      "tokenAmounts": [
        {
          "numerator": [
            874927905,
            501709542,
            299304
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            929343920,
            221999963,
            243
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xB45a79b714040C0937aD34A6e3aA4fa96a5704f4"
      },
      "tokenAmounts": [
        {
          "numerator": [
            6884
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            981421008,
            31022815,
            1
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xE8661Fd61A7154899545dC02B52E15d12377a764"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1048701091,
            532704390,
            31
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            473267638,
            920012136,
            41
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x2EEAeC1544f356E41d9Eef17A373188386b34A56"
      },
      "tokenAmounts": [
        {
          "numerator": [
            981728289,
            1
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            593590365,
            2
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x7805B64e2d99412d3b8F10Dfe8fc55217C5cc954"
      },
      "tokenAmounts": [
        {
          "numerator": [
            415320654,
            658304938,
            8244
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          },
          "token": {
            "decimals": 18,
            "symbol": "WMATIC",
            "name": "Wrapped Matic",
            "chainId": 137,
            "address": "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
          }
        },
        {
          "numerator": [
            659275882,
            461449337,
            7460
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x160532D2536175d65C03B97b0630A9802c274daD"
      },
      "tokenAmounts": [
        {
          "numerator": [
            1069048241,
            9751
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDC",
            "name": "USDC",
            "chainId": 137,
            "address": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
          }
        },
        {
          "numerator": [
            331177335,
            563941729,
            9141714
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xE89faE1B4AdA2c869f05a0C96C87022DaDC7709a"
      },
      "tokenAmounts": [
        {
          "numerator": [
            300138316,
            454013077,
            345546
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        },
        {
          "numerator": [
            888597064,
            368
          ],
          "denominator": [
            1000000
          ],
          "currency": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          },
          "token": {
            "decimals": 6,
            "symbol": "USDT",
            "name": "Tether USD",
            "chainId": 137,
            "address": "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x4E74922aed548E0CbC115c0a0789Ede0bbde766e"
      },
      "tokenAmounts": [
        {
          "numerator": [
            57096981,
            477144626
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          },
          "token": {
            "decimals": 18,
            "symbol": "QUICK(OLD)",
            "name": "Quickswap(OLD)",
            "chainId": 137,
            "address": "0x831753DD7087CaC61aB5644b308642cc1c33Dc13"
          }
        },
        {
          "numerator": [
            422479706,
            648470824,
            38
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    1,
    null
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0xCF2aBFf7B321CCAaaF4faca391Aa4Ffc87EfEc13"
      },
      "tokenAmounts": [
        {
          "numerator": [
            592246341,
            525807581,
            1
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          },
          "token": {
            "decimals": 18,
            "symbol": "ETH",
            "name": "Ether",
            "chainId": 137,
            "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
          }
        },
        {
          "numerator": [
            68462197,
            3205087,
            2454
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x95BDb9423c5093C5C71b878e3102E2B0258Ad3A6"
      },
      "tokenAmounts": [
        {
          "numerator": [
            449291
          ],
          "denominator": [
            100000000
          ],
          "currency": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          },
          "token": {
            "decimals": 8,
            "symbol": "wBTC",
            "name": "Wrapped Bitcoin",
            "chainId": 137,
            "address": "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6"
          }
        },
        {
          "numerator": [
            455069930,
            498588693,
            91
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x74214F5d8AA71b8dc921D8A963a1Ba3605050781"
      },
      "tokenAmounts": [
        {
          "numerator": [
            117920964,
            523003616,
            593722
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          },
          "token": {
            "decimals": 18,
            "symbol": "DAI",
            "name": "Dai Stablecoin",
            "chainId": 137,
            "address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"
          }
        },
        {
          "numerator": [
            119073037,
            736356242,
            597455
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ],
  [
    2,
    {
      "liquidityToken": {
        "decimals": 18,
        "symbol": "UNI-V2",
        "name": "Uniswap V2",
        "chainId": 137,
        "address": "0x2EEAeC1544f356E41d9Eef17A373188386b34A56"
      },
      "tokenAmounts": [
        {
          "numerator": [
            981728289,
            1
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          },
          "token": {
            "decimals": 18,
            "symbol": "GHST",
            "name": "Aavegotchi GHST Token",
            "chainId": 137,
            "address": "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7"
          }
        },
        {
          "numerator": [
            593590365,
            2
          ],
          "denominator": [
            660865024,
            931322574
          ],
          "currency": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          },
          "token": {
            "decimals": 18,
            "symbol": "MAI",
            "name": "miMATIC",
            "chainId": 137,
            "address": "0xa3Fa99A148fA48D14Ed51d610c367C61876997F1"
          }
        }
      ]
    }
  ]
]
// a list of tokens by chain
const WETH_ONLY = {
  [ChainId.MUMBAI]: [WETH[ChainId.MUMBAI]],
  [ChainId.MATIC]: [WETH[ChainId.MATIC]],
};

// TODO: Remove this constant when supporting multichain
export const MATIC_CHAIN = ChainId.MATIC;

export enum TxnType {
  SWAP,
  ADD,
  REMOVE,
}

export const GlobalConst = {
  blacklists: {
    TOKEN_BLACKLIST: [
      '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
      '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
      '0xe31debd7abff90b06bca21010dd860d8701fd901',
      '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
      '0xf4eda77f0b455a12f3eb44f8653835f377e36b76',
    ],
    PAIR_BLACKLIST: [
      '0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5',
      '0x97cb8cbe91227ba87fc21aaf52c4212d245da3f8',
    ],
  },
  addresses: {
    ROUTER_ADDRESS: {
      [ChainId.MATIC]: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff',
      [ChainId.MUMBAI]: '0x8954AfA98594b838bda56FE4C12a09D7739D179b',
    }, //'0x6207A65a8bbc87dD02C3109D2c74a6bCE4af1C8c';//
    ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
    LAIR_ADDRESS: '0xf28164a485b0b2c90639e47b0f377b4a438a16b1',
    NEW_LAIR_ADDRESS: '0x958d208Cdf087843e9AD98d23823d32E17d723A1',
    QUICK_ADDRESS: '0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
    NEW_QUICK_ADDRESS: '0xB5C064F955D8e7F38fE0460C556a72987494eE17',
    FACTORY_ADDRESS: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
    GOVERNANCE_ADDRESS: '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F', //TODO: MATIC
    MERKLE_DISTRIBUTOR_ADDRESS: {
      // TODO: specify merkle distributor for mainnet
      [ChainId.MATIC]: '0x4087F566796b46eEB01A38174c06E2f9924eAea8', //TODO: MATIC
      [ChainId.MUMBAI]: undefined,
    },
    QUICK_CONVERSION: '0x333068d06563a8dfdbf330a0e04a9d128e98bf5a',
  },
  utils: {
    QUICK_CONVERSION_RATE: 1000,
    ONEDAYSECONDS: 60 * 60 * 24,
    DQUICKFEE: 0.04,
    DQUICKAPR_MULTIPLIER: 0.01,
    ROWSPERPAGE: 10,
    FEEPERCENT: 0.003,
    BUNDLE_ID: '1',
    PROPOSAL_LENGTH_IN_DAYS: 7, // TODO this is only approximate, it's actually based on blocks
    NetworkContextName: 'NETWORK',
    INITIAL_ALLOWED_SLIPPAGE: 50, // default allowed slippage, in bips
    DEFAULT_DEADLINE_FROM_NOW: 60 * 20, // 20 minutes, denominated in seconds
    BIG_INT_ZERO: JSBI.BigInt(0),
    ONE_BIPS: new Percent(JSBI.BigInt(1), JSBI.BigInt(10000)), // one basis point
    BIPS_BASE: JSBI.BigInt(10000),
    // used to ensure the user doesn't send so much ETH so they end up with <.01
    MIN_ETH: JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)), // .01 ETH
    BETTER_TRADE_LINK_THRESHOLD: new Percent(
      JSBI.BigInt(75),
      JSBI.BigInt(10000),
    ),
    // the Uniswap Default token list lives here
    // we add '' to remove the possibility of nulls
    DEFAULT_TOKEN_LIST_URL: process.env.REACT_APP_TOKEN_LIST_DEFAULT_URL + '',
    DEFAULT_LP_FARMS_LIST_URL:
      process.env.REACT_APP_STAKING_LIST_DEFAULT_URL + '',
    DEFAULT_DUAL_FARMS_LIST_URL:
      process.env.REACT_APP_DUAL_STAKING_LIST_DEFAULT_URL + '',
    DEFAULT_SYRUP_LIST_URL: process.env.REACT_APP_SYRUP_LIST_DEFAULT_URL + '',
    ANALYTICS_TOKENS_COUNT: 200,
    ANALYTICS_PAIRS_COUNT: 400,
  },
  analyticChart: {
    ONE_MONTH_CHART: 1,
    THREE_MONTH_CHART: 2,
    SIX_MONTH_CHART: 3,
    ONE_YEAR_CHART: 4,
    ALL_CHART: 5,
    CHART_COUNT: 60, //limit analytics chart items not more than 60
  },
  farmIndex: {
    LPFARM_INDEX: 0,
    DUALFARM_INDEX: 1,
  },
  walletName: {
    METAMASK: 'Metamask',
    CYPHERD: 'CypherD',
    BLOCKWALLET: 'BlockWallet',
    BITKEEP: 'BitKeep',
    INJECTED: 'Injected',
    SAFE_APP: 'Gnosis Safe App',
    ARKANE_CONNECT: 'Venly',
    Portis: 'Portis',
    WALLET_LINK: 'Coinbase Wallet',
    WALLET_CONNECT: 'WalletConnect',
  },
};

export const GlobalValue = {
  percents: {
    ALLOWED_PRICE_IMPACT_LOW: new Percent( // used for warning states
      JSBI.BigInt(100),
      GlobalConst.utils.BIPS_BASE,
    ), // 1%
    ALLOWED_PRICE_IMPACT_MEDIUM: new Percent(
      JSBI.BigInt(300),
      GlobalConst.utils.BIPS_BASE,
    ), // 3%
    ALLOWED_PRICE_IMPACT_HIGH: new Percent(
      JSBI.BigInt(500),
      GlobalConst.utils.BIPS_BASE,
    ), // 5%
    PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: new Percent( // if the price slippage exceeds this number, force the user to type 'confirm' to execute
      JSBI.BigInt(1000),
      GlobalConst.utils.BIPS_BASE,
    ), // 10%
    BLOCKED_PRICE_IMPACT_NON_EXPERT: new Percent( // for non expert mode disable swaps above this
      JSBI.BigInt(1500),
      GlobalConst.utils.BIPS_BASE,
    ), // 15%
  },
  tokens: {
    MATIC: WETH[ChainId.MATIC],
    COMMON: {
      EMPTY: new Token(
        ChainId.MATIC,
        '0x0000000000000000000000000000000000000000',
        0,
        'EMPTY',
        'EMPTY',
      ),
      USDC: new Token(
        ChainId.MATIC,
        '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        6,
        'USDC',
        'USDC',
      ),
      USDT: new Token(
        ChainId.MATIC,
        '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        6,
        'USDT',
        'Tether USD',
      ),
      OLD_QUICK: new Token(
        ChainId.MATIC,
        GlobalConst.addresses.QUICK_ADDRESS,
        18,
        'QUICK(OLD)',
        'Quickswap(OLD)',
      ),
      NEW_QUICK: new Token(
        ChainId.MATIC,
        GlobalConst.addresses.NEW_QUICK_ADDRESS,
        18,
        'QUICK(NEW)',
        'QuickSwap(NEW)',
      ),
      OLD_DQUICK: new Token(
        ChainId.MATIC,
        '0xf28164A485B0B2C90639E47b0f377b4a438a16B1',
        18,
        'dQUICK',
        'Dragon QUICK',
      ),
      NEW_DQUICK: new Token(
        ChainId.MATIC,
        '0x958d208Cdf087843e9AD98d23823d32E17d723A1',
        18,
        'dQUICK',
        'Dragon QUICK',
      ),
      WBTC: new Token(
        ChainId.MATIC,
        '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
        8,
        'wBTC',
        'Wrapped Bitcoin',
      ),
      DAI: new Token(
        ChainId.MATIC,
        '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
        18,
        'DAI',
        'Dai Stablecoin',
      ),
      ETHER: new Token(
        ChainId.MATIC,
        '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
        18,
        'ETH',
        'Ether',
      ),
      CXETH: new Token(
        ChainId.MATIC,
        '0xfe4546feFe124F30788c4Cc1BB9AA6907A7987F9',
        18,
        'cxETH',
        'CelsiusX Wrapped ETH',
      ),
      MI: new Token(
        ChainId.MATIC,
        '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1',
        18,
        'MAI',
        'miMATIC',
      ),
      SAND: new Token(
        ChainId.MATIC,
        '0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683',
        18,
        'SAND',
        'SAND',
      ),
      MAUSDC: new Token(
        ChainId.MATIC,
        '0x9719d867A500Ef117cC201206B8ab51e794d3F82',
        6,
        'maUSDC',
        'Matic Aave interest bearing USDC',
      ),
      FRAX: new Token(
        ChainId.MATIC,
        '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
        18,
        'FRAX',
        'FRAX',
      ),
      GHST: new Token(
        ChainId.MATIC,
        '0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7',
        18,
        'GHST',
        'Aavegotchi GHST Token',
      ),
    },
  },
};

export const GlobalData = {
  bases: {
    // used to construct intermediary pairs for trading
    BASES_TO_CHECK_TRADES_AGAINST: {
      ...WETH_ONLY,
      [ChainId.MATIC]: [
        ...WETH_ONLY[ChainId.MATIC],
        GlobalValue.tokens.COMMON.USDC,
        GlobalValue.tokens.COMMON.USDT,
        GlobalValue.tokens.COMMON.OLD_QUICK,
        GlobalValue.tokens.COMMON.NEW_QUICK,
        GlobalValue.tokens.COMMON.ETHER,
        GlobalValue.tokens.COMMON.WBTC,
        GlobalValue.tokens.COMMON.DAI,
        GlobalValue.tokens.COMMON.GHST,
        GlobalValue.tokens.COMMON.MI,
      ],
    },
    // Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these tokens.
    CUSTOM_BASES: {[ChainId.MATIC]: undefined, [ChainId.MUMBAI]: undefined},
    // used for display in the default list when adding liquidity
    SUGGESTED_BASES: {
      ...WETH_ONLY,
      [ChainId.MATIC]: [
        ...WETH_ONLY[ChainId.MATIC],
        GlobalValue.tokens.COMMON.DAI,
        GlobalValue.tokens.COMMON.USDC,
        GlobalValue.tokens.COMMON.USDT,
        GlobalValue.tokens.COMMON.OLD_QUICK,
        GlobalValue.tokens.COMMON.NEW_QUICK,
        GlobalValue.tokens.COMMON.ETHER,
        GlobalValue.tokens.COMMON.WBTC,
        GlobalValue.tokens.COMMON.SAND,
        GlobalValue.tokens.COMMON.MI,
      ],
    },
    // used to construct the list of all pairs we consider by default in the frontend
    BASES_TO_TRACK_LIQUIDITY_FOR: {
      ...WETH_ONLY,
      [ChainId.MATIC]: [
        ...WETH_ONLY[ChainId.MATIC],
        GlobalValue.tokens.COMMON.DAI,
        GlobalValue.tokens.COMMON.USDC,
        GlobalValue.tokens.COMMON.USDT,
        GlobalValue.tokens.COMMON.OLD_QUICK,
        GlobalValue.tokens.COMMON.NEW_QUICK,
        GlobalValue.tokens.COMMON.ETHER,
        GlobalValue.tokens.COMMON.WBTC,
      ],
    },
  },
  pairs: {
    PINNED_PAIRS: {
      [ChainId.MATIC]: [
        [GlobalValue.tokens.COMMON.USDC, GlobalValue.tokens.COMMON.USDT],
        [GlobalValue.tokens.COMMON.USDC, GlobalValue.tokens.COMMON.DAI],
        [GlobalValue.tokens.COMMON.ETHER, GlobalValue.tokens.COMMON.USDC],
        [GlobalValue.tokens.COMMON.WBTC, GlobalValue.tokens.COMMON.ETHER],
        [WETH[ChainId.MATIC], GlobalValue.tokens.COMMON.USDT],
        [WETH[ChainId.MATIC], GlobalValue.tokens.COMMON.USDC],
        [WETH[ChainId.MATIC], GlobalValue.tokens.COMMON.ETHER],
        [GlobalValue.tokens.COMMON.ETHER, GlobalValue.tokens.COMMON.OLD_QUICK],
      ],
      [ChainId.MUMBAI]: undefined,
    },
  },
  analytics: {
    CHART_DURATIONS: [
      GlobalConst.analyticChart.ONE_MONTH_CHART,
      GlobalConst.analyticChart.THREE_MONTH_CHART,
      GlobalConst.analyticChart.SIX_MONTH_CHART,
      GlobalConst.analyticChart.ONE_YEAR_CHART,
      GlobalConst.analyticChart.ALL_CHART,
    ],
    CHART_DURATION_TEXTS: ['1M', '3M', '6M', '1Y', 'All'],
  },
};


const bases: Token[] = GlobalData.bases.BASES_TO_CHECK_TRADES_AGAINST[ChainId.MATIC]

const basePairs: [Token, Token][] =
  flatMap(bases, (base): [Token, Token][] =>
    bases.map((otherBase) => [base, otherBase]),
  ).filter(([t0, t1]) => t0.address !== t1.address)


function getPairs(tokenA: Token, tokenB: Token) {
  const allPairCombinations: [Token, Token][] =
    tokenA && tokenB
      ? [
        // the direct pair
        [tokenA, tokenB],
        // token A against all bases
        ...bases.map((base): [Token, Token] => [tokenA, base]),
        // token B against all bases
        ...bases.map((base): [Token, Token] => [tokenB, base]),
        // each base against all bases
        ...basePairs,
      ]
        .filter((tokens): tokens is [Token, Token] =>
          Boolean(tokens[0] && tokens[1]),
        )
        .filter(([t0, t1]) => t0.address !== t1.address)
        .filter(([tokenA, tokenB]) => {
          if (!ChainId.MATIC) return true;
          const customBases = GlobalData.bases.CUSTOM_BASES[ChainId.MATIC];
          if (!customBases) return true;

          const customBasesA: Token[] | undefined =
            customBases[tokenA.address];
          const customBasesB: Token[] | undefined =
            customBases[tokenB.address];

          if (!customBasesA && !customBasesB) return true;

          if (
            customBasesA &&
            !(customBasesA as Token[]).find((base) => tokenB.equals(base))
          )
            return false;
          if (
            customBasesB &&
            !(customBasesB as Token[]).find((base) => tokenA.equals(base))
          )
            return false;

          return true;
        })
      : []

  return allPairCombinations
}


const alchemy = 'https://polygon-mainnet.g.alchemy.com/v2/qteyaTH9FM30hxyZ1iPHbRLYCb7GG8pM'
const provider = new ethers.providers.JsonRpcProvider(alchemy)

const MAI_ADDRESS = '0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'
const AAVE_ADDRESS = '0xd6df932a45c0f255f85145f286ea0b292b21c90b'
const ETH_ADDRESS = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
const DAI_ADDRESS = '0x8F3CF7AD23CD3CADBD9735AFF958023239C6A063'
const USDC_ADDRESS = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
const ACRE_ADDRESS = '0x011734f6Ed20E8D011d85Cf7894814B897420acf'

export async function getTokenData(tokenAddress: string) {
  return await Fetcher.fetchTokenData(ChainId.MATIC, tokenAddress, provider)
}

export async function getPairData(token1: Token, token2: Token) {
  return await Fetcher.fetchPairData(token1, token2, provider)
}

// const ETH = await getTokenData(ETH_ADDRESS)
// const AAVE = await getTokenData(AAVE_ADDRESS)
// const DAI = await getTokenData(DAI_ADDRESS)
// const USDC = await getTokenData(USDC_ADDRESS)
const MAI = await getTokenData(MAI_ADDRESS)
const ACRE = await getTokenData(ACRE_ADDRESS)

// const PAIR_MAI_ACRE = new qs.Pair(new qs.TokenAmount(MAI, '2000000000000000000'), new qs.TokenAmount(ACRE, '1000000000000000000'))


// const PAIR_MAI_ACRE = await getPairData(MAI, ACRE)

// const PAIR_ETH_DAI = await getPairData(AAVE, ETH)

// console.log('getPairs', getPairs(MAI, ACRE))

// const PAIR_INTERFACE = new Interface(IUniswapV2PairABI);

export enum PairState {
  LOADING,
  NOT_EXISTS,
  EXISTS,
  INVALID,
}

export function wrappedCurrency(
  currency: Currency | undefined,
  chainId: ChainId | undefined,
): Token | undefined {
  return chainId && currency === ETHER
    ? WETH[chainId]
    : currency instanceof Token && currency.chainId === chainId
      ? currency
      : undefined;
}

async function getPath(pairs: [Token, Token][], tokenA: Token, tokenB: Token, tokenAToSell: TokenAmount) {
  // const pairAddresses =
  //   pairs.map(([tokenA, tokenB]) => {
  //     return tokenA && tokenB && !tokenA.equals(tokenB)
  //       ? Pair.getAddress(tokenA, tokenB)
  //       : undefined;
  //   })
  //
  // const tokens =
  //   pairs.map(([currencyA, currencyB]) => [
  //     wrappedCurrency(currencyA, ChainId.MATIC),
  //     wrappedCurrency(currencyB, ChainId.MATIC),
  //   ])
  //
  // console.log('tokens', tokens, results.length, tokens.length)

  // const callResults = results.map((result, i) => {
  //   // @ts-ignore
  //   const {result: reserves, loading} = result;
  //   const tokenA = tokens[i][0];
  //   const tokenB = tokens[i][1];
  //
  //   if (loading) return [PairState.LOADING, null];
  //   if (!tokenA || !tokenB || tokenA.equals(tokenB))
  //     return [PairState.INVALID, null];
  //   if (!reserves) return [PairState.NOT_EXISTS, null];
  //   // @ts-ignore
  //   const {reserve0, reserve1} = reserves;
  //   const [token0, token1] = tokenA.sortsBefore(tokenB)
  //     ? [tokenA, tokenB]
  //     : [tokenB, tokenA];
  //   if (!reserve0 || !reserve1) return [PairState.INVALID, null];
  //   return [
  //     PairState.EXISTS,
  //     new Pair(
  //       new TokenAmount(token0, reserve0.toString()),
  //       new TokenAmount(token1, reserve1.toString()),
  //     )
  //   ]
  // }).filter(([status]) => {
  //   console.log('status', status)
  //   return status === PairState.EXISTS
  // }).map(([status, pair]) => pair) as Pair[];

  // const checkPairs = finalResults.filter(([status, pair]) => status === PairState.EXISTS).map(([status, pair]) => pair)
  //
  // // console.log('pairAddresses', tokens)
  //
  // const newFile = fs.createWriteStream('newArray.txt');
  //
  // const writeToFile = (arr: any[], file: any) => {
  //   arr.forEach((v) => {
  //     file.write(JSON.stringify(v) + ',' +'\n');
  //   });
  //
  //   file.end();
  // }

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
      console.log('current[0], current[1]', current[0], current[1])
    }


    return [...accum, pair]

  }, Promise.resolve([]));

  // console.log('newPairs', newPairs[0].token0);

  // writeToFile(newPairs, newFile)


  return Trade.bestTradeExactIn(newPairs as unknown as Pair[], tokenAToSell, tokenB, {
    maxHops: 3,
    maxNumResults: 1,
  })[0] ?? []
}




// console.log('getPairs(MAI, ACRE)', getPairs(MAI, ACRE))

// @ts-ignore
const ppp: Trade = await getPath(getPairs(MAI, ACRE), MAI, ACRE, new TokenAmount(MAI, '1000000000000000'))

console.log('ppp', ppp.route.path)

