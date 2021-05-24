require("@nomiclabs/hardhat-waffle")
require("./tasks/faucet")

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  // react: {
  //   providerPriority: ["web3modal", "hardhat"],
  // },
  paths: {
    artifacts: "./frontend/src/artifacts",
  },

  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
}
