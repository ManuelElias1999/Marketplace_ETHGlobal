require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

const key = '';
const mnemonic = '';

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/D82OBa-S37NXflgnHRYRp5vTuhYZzWh8',
      accounts: [key]
    },
    optimism_goerli: {
      url: 'https://opt-goerli.g.alchemy.com/v2/bsmxJEbtNY6Z25OBwtc1XZtyT3epYZVq',
      accounts: [key]
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/iU8dRQlRbhVhXvEQ3kkzIdjn6GQTqqdY',
      accounts: [key]
    },
  },
  paths: {
    sources: './src/ethereum-hardhat/contracts',
    tests: './src/ethereum-hardhat/test',
    cache: './src/ethereum-hardhat/cache',
    artifacts: './src/ethereum-hardhat/artifacts'
  }
};


// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };