const bip39 = require('bip39');

const generateMnemonic = async() => {
    const mnemonic = bip39.generateMnemonic();
    return mnemonic
}

module.exports = generateMnemonic;
