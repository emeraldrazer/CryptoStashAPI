const bip39 = require('bip39');

class Mnemonic {
    constructor() {
        this.generateMnemonic();
    }

    generateMnemonic() {
        this.generated = bip39.generateMnemonic();
    }
}

module.exports = Mnemonic;
