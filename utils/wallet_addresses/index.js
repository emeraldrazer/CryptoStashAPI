const {binanceAddressCreation} = require('./generation/bnb');
const {generateDogeCoinAddress} = require('./generation/doge');
const {generateLiteCoinAddress} = require('./generation/ltc');
const {solanaAddressCreation} = require('./generation/sol');
const {generateTetherAddress} = require('./generation/usdt');
const {rippleAddressCreation} = require('./generation/xrp');
const {bitcoinAddressCreation} = require('./generation/btc');
const {ethereumAddressCreation} = require('./generation/eth');

module.exports = {
    CreateBNB: binanceAddressCreation,
    CreateDoge: generateDogeCoinAddress,
    CreateLite: generateLiteCoinAddress,
    CreateSolana: solanaAddressCreation,
    CreateUSDT: generateTetherAddress,
    CreateXRP: rippleAddressCreation,
    CreateBTC: bitcoinAddressCreation,
    CreateETH: ethereumAddressCreation
}