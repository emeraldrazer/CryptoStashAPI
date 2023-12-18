const express = require('express');
const router = express.Router();

const {createWallet} = require('../controllers/wallet/wallet');

router.post('/create', createWallet);

module.exports = router;
