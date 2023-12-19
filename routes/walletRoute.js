const express = require('express');
const router = express.Router();

const {createWallet, getWallets, deleteWallet, dropDB} = require('../controllers/wallet/wallet');

router.post('/create', createWallet);
router.get('/get', getWallets);
router.delete('/delete', deleteWallet);
router.delete('/dropall', dropDB);

module.exports = router;
