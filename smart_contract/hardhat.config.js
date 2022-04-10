// https://eth-ropsten.alchemyapi.io/v2/5v4EQFgyEnSWj4LBZTmL5Nb1-tqoo6ky
require('@nomiclabs/hardhat-waffle');
const {config} = require('dotenv')
config()

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL,
      accounts: [process.env.ROPSTEN_ACCOUNT]
    }
  }
}