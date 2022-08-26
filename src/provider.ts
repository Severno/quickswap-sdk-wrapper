import {ethers} from 'ethers';

const alchemy = 'https://polygon-mainnet.g.alchemy.com/v2/qteyaTH9FM30hxyZ1iPHbRLYCb7GG8pM'
const provider = new ethers.providers.JsonRpcProvider(alchemy)

export {provider}
