// const {Mnemonic, Guid, generateJWT, checkJWT, generateString} = require('./utils/misc');

// const func = async() => {
//     const mnemonic = new Mnemonic().generated
//     const guid = new Guid().id;
//     const rString = await generateString(16);
//     const jwtToken = await generateJWT('someData', '1min');
//     const jwtCheck = await checkJWT(jwtToken)
    
//     console.log(mnemonic);
//     console.log(guid);
//     console.log(rString);
//     console.log(jwtToken);
//     console.log(jwtCheck);
// }

// func();

require('dotenv').config();
require('express-async-errors');

const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGO_URL;

const cloudinary = require('cloudinary').v2;
const express = require('express');
const app = express();

const publicWalletRoute = require('./routes/publicWalletRoute');
const walletRoute = require('./routes/walletRoute');

const notFoundMiddleWare = require('./middleware/errors/not-found')
const errorHandlerMiddleWare = require('./middleware/errors/error-handler')

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/', walletRoute);
app.use('/public/', publicWalletRoute);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

const connectDB = require('./db/connect');

const start = async () => {
    try {
        await connectDB(MONGO_URL);
        app.listen(PORT, () => console.log(`API is Online on port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start();
