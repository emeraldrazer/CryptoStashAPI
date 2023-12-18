const crypto = require('crypto');

const generateString = async(length) => {
    const buffer = crypto.randomBytes(length);
    return buffer.toString('hex');
}

module.exports = { generateString }