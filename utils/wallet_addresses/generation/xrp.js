require('dotenv').config();

const Wallet = require('xpring-js').Wallet;
const rippleKey = require("ripple-keypairs");
const sha256 = require('sha256');

const unit8Array = sha256(process.env.KEY, { asBytes: true });

let options = {
    algorithm: 'ecdsa-secp256k1',
    entropy: unit8Array,
    includeClassicAddress: true,
    test: true
};

const rippleAddressCreation = async () => {
    let secrete = rippleKey.generateSeed(options);

    let wallet = Wallet.generateWalletFromSeed(secrete);

    return { public: wallet.publicKey, private: wallet.privateKey }
}

module.exports = { rippleAddressCreation };