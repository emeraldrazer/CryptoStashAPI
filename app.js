const {Mnemonic, Guid, generateJWT, checkJWT, generateString} = require('./utils/misc');

const func = async() => {
    const mnemonic = new Mnemonic().generated
    const guid = new Guid().id;
    const rString = await generateString(16);
    const jwtToken = await generateJWT('someData', '1min');
    const jwtCheck = await checkJWT(jwtToken)
    
    console.log(mnemonic);
    console.log(guid);
    console.log(rString);
    console.log(jwtToken);
    console.log(jwtCheck);
}

func();
