var CoinKey = require('coinkey');

const bitcoinAddressCreation = async () => {
    var wallet = new CoinKey.createRandom();

    return { public: wallet.publicAddress, private: wallet.privateKey.toString('hex') }
}

module.exports = { bitcoinAddressCreation }