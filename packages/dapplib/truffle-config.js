require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name response situate smile hover derive system gas'; 
let testAccounts = [
"0x88d4f952c2e49a7f7e319bee56fa9ff359da0ae617774959a605d6ed0cc01c1d",
"0x133fe2389a0df3479b78faf1eba89fdb6bfc5975c1fc7b2081095145964159a6",
"0xbf3c101c1759142c8df3219097a4974bdd7208a7d4b7c829caf2486fdcf98a9c",
"0xde7d5be7d7bbf8634be599372a044496808806af8e420702b2abe17f036fde13",
"0x3101c31b33802d726f52ebd35017f31c5683c505063637567054e8431a8156cd",
"0xa13d66f6c97765bc6517a2da8035f48d1ebf4f94acc6e993796b7a0b77f23836",
"0x7364db9127546beea2e3dfc3b07728118ff20999676fcaad61eb84478275cd01",
"0xe90927a7b2449a14d8bd34735650276e4b9ac65f092d8a199ca970a3d0e0fbe4",
"0x9c657d53dc7765477f4e743374950c83b06bd8dce660a91defe81f98edb362a3",
"0x6102668c4daec93e0402fa6dc3512b871559f80ac6b88199cf2117b3cf2545eb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


