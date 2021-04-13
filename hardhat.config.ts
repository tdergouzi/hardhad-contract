/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 import { HardhatUserConfig } from "hardhat/types";

 import "@nomiclabs/hardhat-waffle";
 import "@nomiclabs/hardhat-etherscan";
 import "hardhat-typechain";
 import myConfig from "./config";
 
 const config: HardhatUserConfig = {
   defaultNetwork: "hardhat",
   solidity: {
     compilers:[{version: "0.6.6", settings: {}}],
     settings: {
       optimizer: {
         enabled: true,
         runs: 200
       }
     }
   },
   networks: {
     hardhat: {},
     ropsten: {
       url: `https://ropsten.infura.io/v3/${myConfig.InfuraApiKey}`,
       accounts: [myConfig.RopstenPK]
     },
     bsctestnet: {
       url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
       accounts: [myConfig.BscTestNetPK]
     },
     bscmainnet: {
       url: `https://bsc-dataseed.binance.org/`,
       accounts: [myConfig.BscMainNetPK]
     }
   },
   etherscan: {
     apiKey: myConfig.EtherscanApiKey,
   },
   paths: {
     sources: "./contracts/solo",
     tests: "./test/solo",
     cache: "./cache",
     artifacts: "./artifacts"
   },
   mocha: {
     timeout: 20000
   }
 };

 export default config;