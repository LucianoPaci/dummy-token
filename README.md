# Dummy Token

A simple dummy token. Based on the [HardHat Tutorial](https://hardhat.org/tutorial/).

## Setup

1. Run `npm install` to install dependecies
2. Run `npx hardhat test` to test the code
3. Start a local development ethereum node on a new terminal using `npx hardhat node`
4. Run `npx hardhat --network localhost run scripts/deploy.js` to deploy the Dummy Token contract, keep note of the `Token Address` that will output in the terminal.
5. Run `npx hardhat --network localhost faucet <token-address> <your-address>` where `<token-address>` is the address of the Dummy Token contract deployed in the previous step, and `<your-address>` is your Ethereum address (i.e. your MetaMask account). This will send ETH and DUMMY tokens to your ethereum account.
6. Connect your MetaMask extension to the `localhost` network. You should have 1 ETH in your balance.
7. Add the Dummy Token to MetaMask:
   - Click on `Add Token`
   - Click on `Custom Token`
   - Paste on `Token Contract Address` the Dummy Token contract address (from step 4)
   - You should see `100 DUMMY` tokens in your wallet
