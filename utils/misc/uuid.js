const uuid = require('uuid').v4;

const generateGuid = async () => {
    const id = uuid();
    return id;
}

module.exports = generateGuid;
