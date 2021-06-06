const path = require("path");
const provider = require("@truffle/hdwallet-provider");
const fs = require("fs");

const secrets = JSON.parse(fs.readFileSync(".secrets.json").toString().trim());

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    kovan: {
      provider: () =>
        new provider(
          secrets.privateKeys,
          "https://kovan.infura.io/v3/889ed6c82a584920add52ff5a44486a0",
          0,
          4
        ),
      network_id: 42,
    },
  },
  compilers: {
    solc: {
      version: "0.6.3",
    },
  },
};
