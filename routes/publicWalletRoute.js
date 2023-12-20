const express = require('express');
const router = express.Router();

const {findWallet} = require('../controllers/wallet/wallet');

router.get('/w/:id', findWallet);

module.exports = router;
