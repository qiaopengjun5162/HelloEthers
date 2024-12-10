import { JsonRpcProvider } from 'ethers';

// Connect to the Ethereum network
const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/YLgbp9I-spejSR_9EHp_-UYDrIYdrwE1");

// Get block by number
const blockNumber = "latest";
const block = await provider.getBlock(blockNumber);

console.log(block);