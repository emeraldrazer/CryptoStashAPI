const bitcoin = require('bitcoinjs-lib');
var CoinKey = require('coinkey');

function generateLiteCoinAddress() {
    var wallet = new CoinKey.createRandom();

    const { address } = bitcoin.payments.p2pkh({ pubkey: wallet.publicKey });

    return { public: address, private: wallet.privateKey.toString('hex') };
}

module.exports = { generateLiteCoinAddress }