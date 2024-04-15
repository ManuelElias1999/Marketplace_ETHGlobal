// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.utils.parseEther("0.001");

//   const Marketplace = await hre.ethers.getContractFactory("Marketplace");
//   const marketplace = await Marketplace.deploy(unlockTime, { value: lockedAmount });

//   await marketplace.deployed();

//   console.log(
//     `Marketplace with ${ethers.utils.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} Marketplace to ${marketplace.address}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy();

  await marketplace.deployed();

  console.log("Marketplace deployed to:", marketplace.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });





    // "@nomicfoundation/hardhat-toolbox": "2.0.2",
    // "@ethersproject/providers": "5.7.2",
    // "@nomicfoundation/hardhat-network-helpers": "1.0.8",
    // "@nomicfoundation/hardhat-chai-matchers": "1.0.6", 
    // "@nomiclabs/hardhat-etherscan": "3.1.7", 
    // "@types/chai": "4.3.4",
    // "@types/mocha": "10.0.1",
    // "@typechain/hardhat":"6.1.5",
    // "chai":"4.3.7", 
    // "hardhat-gas-reporter":"1.0.9",
    // "solidity-coverage": "0.8.2",
    // "ts-node": "10.9.1"