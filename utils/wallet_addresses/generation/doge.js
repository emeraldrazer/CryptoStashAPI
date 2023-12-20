const bitcoin = require('bitcoinjs-lib');
var CoinKey = require('coinkey');

const generateDogeCoinAddress = async () => {
    const network = bitcoin.networks.dogecoin;
    var keyPair = new CoinKey.createRandom(network);

    const dogecoinAddress = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network }).address;

    return { public: dogecoinAddress, private: keyPair.privateKey.toString('hex')}
}

module.exports = { generateDogeCoinAddress }
