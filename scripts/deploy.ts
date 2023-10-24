const hre = require("hardhat");

async function main() {
 
const FunToken = await hre.ethers.getContractFactory('FunToken'); 

const funToken = await FunToken.deploy();

await funToken.deployed();

console.log('funToken with 1 ETH deploye to:', funToken.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
