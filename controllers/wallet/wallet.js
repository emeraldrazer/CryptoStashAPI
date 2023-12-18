const {Mnemonic, Guid, generateJWT, checkJWT, generateString} = require('../../utils/misc');
const {BadRequestError} = require('../../errors');
const Wallet = require('../../db/schemas/walletSchema');

const createWallet = async(req, res) => {
    const createdWallet = await Wallet.create({});

    if(!createdWallet){
        throw new BadRequestError('Error in creating a wallet, Please try again later');
    }

    return res.status(200).json({status: 'success', result: createdWallet});    
}

module.exports = { createWallet };