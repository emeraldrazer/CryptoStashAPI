const mongoose = require('mongoose');
const {Mnemonic, Guid} = require('../../utils/misc');

const WalletSchema = new mongoose.Schema({
    public_id: {
        type: String,
        default: new Guid().id
    },
    public_address: {
        type: String,
    },
    mnemonic: {
        type: String,
        default: new Mnemonic().generated
    },
    total_balance: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: new Date().getTime()
    },
    cryptocurrencies: [{
        btc: {
            type: Number,
            default: 0
        },
        eth: {
            type: Number,
            default: 0
        },
        bnb: {
            type: Number,
            default: 0
        },
        solana: {
            type: Number,
            default: 0
        },
        xrp: {
            type: Number,
            default: 0
        },
        usdt: {
            type: Number,
            default: 0
        },
        ltc: {
            type: Number,
            default: 0
        },
        doge: {
            type: Number,
            default: 0
        },
        nft: {
            type: String,
            default: 0
        },
    }]
})

module.exports = mongoose.model('wallet', WalletSchema)