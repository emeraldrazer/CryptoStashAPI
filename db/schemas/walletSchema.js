const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
    public_id: {
        type: String,
        required: true
    },
    public_address: {
        type: String,
        required: true
    },
    private_mnemonic: {
        type: String,
        required: true
    },
    private_address: {
        type: String,
        required: true
    },
    total_balance: {
        type: Number,
        default: 0,
        required: true
    },
    created_at: {
        type: Date,
        default: new Date().getTime(),
        required: true
    },
    cryptocurrencies: [{
        full_name: {
            type: String,
            required: true
        },
        short_name: {
            type: String,
            required: true,
        },
        public_address: {
            type: String,
            required: true
        },
        private_address: {
            type: String,
            required: true
        },
        balance: {
            type: Number,
            default: 0,
            required: true
        }
    }],
    non_fungible_token: {
        short_name:{
            type: String,
            default: 'nft'
        },
        public_address: {
            type: String,
            required: true
        },
        private_address: {
            type: String,
            required: true
        },
        balance: {
            type: Number,
            default: 0,
            required: true
        },
        all_nfts: [{
            type: String,
        }]
    }
})

module.exports = mongoose.model('wallet', WalletSchema)