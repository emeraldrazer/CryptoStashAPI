const express = require('express');
const router = express.Router();

const {createWallet, getWallets, deleteWallet, dropDB} = require('../controllers/wallet/wallet');

router.post('/create', createWallet);
router.get('/get', getWallets); // TESTING
router.delete('/delete', deleteWallet); // TESTING
router.delete('/dropall', dropDB); // TESTING

module.exports = router;
