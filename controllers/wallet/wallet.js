const {generateMnemonic, generateGuid, generateString} = require('../../utils/misc');
const {CreateBNB, CreateDoge, CreateLite, CreateSolana, CreateUSDT, CreateXRP, CreateBTC, CreateETH} = require('../../utils/wallet_addresses')
const {BadRequestError} = require('../../errors');
const {StatusCodes} = require('http-status-codes');
const Wallet = require('../../db/schemas/walletSchema');

const createWallet = async(req, res) => {
    const BTC = await CreateBTC();
    const ETH = await CreateETH();
    const BNB = await CreateBNB();
    const SOL = await CreateSolana();
    const XRP = await CreateXRP();
    const USDT = await CreateUSDT();
    const LTC = await CreateLite();
    const DOGE = await CreateDoge();


    const save = {
        public_id: await generateGuid(),
        public_address: await generateString(16),
        private_mnemonic: await generateMnemonic(),
        private_address: await generateString(16),
        cryptocurrencies: [
            { full_name: 'Bitcoin', short_name: 'btc', public_address: BTC.public, private_address: BTC.private },
            { full_name: 'Ethereum', short_name: 'eth', public_address: ETH.public, private_address: ETH.private },
            { full_name: 'Binance', short_name: 'bnb', public_address: BNB.public, private_address: BNB.private },
            { full_name: 'Solana', short_name: 'sol', public_address: SOL.public, private_address: SOL.private },
            { full_name: 'Ripple', short_name: 'xrp', public_address: XRP.public, private_address: XRP.private },
            { full_name: 'Tether', short_name: 'usdt', public_address: USDT.public, private_address: USDT.private },
            { full_name: 'Litecoin', short_name: 'ltc', public_address: LTC.public, private_address: LTC.private  },
            { full_name: 'DogeCoin', short_name: 'doge', public_address: DOGE.public, private_address: DOGE.private },
        ],
        non_fungible_token:{
            public_address: ETH.public,
            private_address: ETH.private,
            all_nfts: [ "test1", "test2" ]
        }
    }

    const createdWallet = await Wallet.create(save);

    if(!createdWallet){
        throw new BadRequestError('Error in creating a wallet, Please try again later');
    }

    return res.status(StatusCodes.OK).json({status: 'success', result: createdWallet});    
}

const findWallet = async(req, res) => {
    const {id} = req.params;
    
    const findWallet = await Wallet.findOne({public_id: id});

    if(!findWallet){
        throw new BadRequestError('No wallet found');
    }

    return res.status(StatusCodes.OK).json({status: 'success', result: findWallet});

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

module.exports = { createWallet, findWallet, getWallets, deleteWallet, dropDB};