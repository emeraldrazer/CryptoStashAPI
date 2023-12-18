require('dotenv').config();

const jwt = require('jsonwebtoken');
const key = process.env.KEY;

const generateJWT = async (data, expire) => {
    const token = jwt.sign({ signed: data }, key, { expiresIn: expire });
    return token;
}

const checkJWT = async (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, (err, decoded) => {
            if (err) {
                reject(err);
            }

            resolve(decoded);
        })
    })
}

module.exports = {
    generateJWT,
    checkJWT
}
