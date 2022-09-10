require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food stock riot pitch history coral light army gentle'; 
let testAccounts = [
"0x15aba0720f4d6e873e29da56b8d1266238cdcd9c0bb6af610730c0f398ee8a85",
"0x2564e7bdd6a361deff0a1ded03fbf037eb9405b4d9dd0dfe4aea94514d711541",
"0x22a25cef1979246edfc9cb17ab056c9c0511b3d9570af981a0a842d4bfb02311",
"0xafa2e483de7bc6856a19badde2d6142e9d7a6b0ae02a07a264b3bf8555a3eb70",
"0x82f7bdb7179a59f942b2a9f093195865fc942d0e8a1507d736c6df75a6b37e80",
"0x6d9c59bdb96c7201ac5621b60a8ddefafaacc2e0c3374c6c62932598f35e66b9",
"0xbee76f1d008d825c64edf187c0bbec74142d506f41e47ec84e62803d728c1c02",
"0xc7f3aa4b6abe6aee943eeed3cc5921921bc6be27067ff2796c10cf7d0c0985a0",
"0xa54fb02fd228ea38d6243315de7104402db438edbde70d157ff89fc7a38aa74e",
"0xae925dfcba1c84000addf9c0c266b4a73478bd27c4e7b55f1507adc9b674731e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

