const {Mnemonic, Guid, generateJWT, checkJWT, generateString} = require('../../utils/misc');
const {BadRequestError} = require('../../errors');
const Wallet = require('../../db/schemas/walletSchema');

const createWallet = async(req, res) => {
    const createdWallet = await Wallet.create();

    if(!createdWallet){
        console.log();
    }

}