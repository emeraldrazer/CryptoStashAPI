var ethers = require('ethers');
var crypto = require('crypto');

const binanceAddressCreation = async () => {
    var id = crypto.randomBytes(32).toString('hex');

    var privateKey = "0x" + id;
    var wallet = new ethers.Wallet(privateKey);

    return { public: wallet.address, private: privateKey }
}

module.exports = { binanceAddressCreation }