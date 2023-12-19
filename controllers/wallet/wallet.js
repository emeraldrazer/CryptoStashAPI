const {generateMnemonic, generateGuid, generateJWT, checkJWT, generateString} = require('../../utils/misc');
const {BadRequestError} = require('../../errors');
const {StatusCodes} = require('http-status-codes');
const Wallet = require('../../db/schemas/walletSchema');

const createWallet = async(req, res) => {
    const save = {
        public_id: await generateGuid(),
        public_address: await generateString(16),
        private_mnemonic: await generateMnemonic(),
        private_address: await generateString(16),
        cryptocurrencies: [
            { full_name: 'Bitcoin', short_name: 'btc', public_address: 'aofhaf', private_address: 'jahsd2r' },
            { full_name: 'Ethereum', short_name: 'eth', public_address: 'aofhaf', private_address: 'jahsd2r' },
            { full_name: 'Binance', short_name: 'bnb', public_address: 'aofhaf', private_address: 'jahsd2r' },
            { full_name: 'Solana', short_name: 'sol', public_address: 'aofhaf', private_address: 'jahsd2r' },
            { full_name: 'Ripple', short_name: 'xrp', public_address: 'aofhaf', private_address: 'jahsd2r' },
            { full_name: 'Tether', short_name: 'usdt', public_address: 'aofhaf', private_address: 'jahsd2r' },
            { full_name: 'Litecoin', short_name: 'ltc', public_address: 'aofhaf', private_address: 'jahsd2r'  },
            { full_name: 'DogeCoin', short_name: 'doge', public_address: 'aofhaf', private_address: 'jahsd2r' },
            { full_name: 'Non-fungible token', short_name: 'nft', public_address: 'aofhaf', private_address: 'jahsd2r' },
        ]
    }

    const createdWallet = await Wallet.create(save);

    if(!createdWallet){
        throw new BadRequestError('Error in creating a wallet, Please try again later');
    }

    return res.status(StatusCodes.OK).json({status: 'success', result: createdWallet});    
}

// FOR TESTING
const getWallets = async(req, res) => {
    const foundWallets = await Wallet.find();

    if(!foundWallets){
        throw new BadRequestError('No wallets found');
    }
    
    return res.status(StatusCodes.OK).json({status: 'success', total: foundWallets.length, result: foundWallets});
}

// FOR TESTING
const deleteWallet = async(req, res) => {
    const deletedWallet = await Wallet.findByIdAndDelete(req.body.id);
    
    if(!deletedWallet){
        throw new BadRequestError('Error in deleting wallet');
    }

    return res.status(StatusCodes.OK).json({status: 'success', result: deletedWallet});
}

// FOR TESTING
const dropDB = async(req, res) => {
    await Wallet.deleteMany();

    return res.send('OK')
}

module.exports = { createWallet, getWallets, deleteWallet, dropDB};