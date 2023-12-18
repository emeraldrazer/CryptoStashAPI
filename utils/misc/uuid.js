const uuid = require('uuid').v4;

class Guid {
    constructor() {
        this.generateGuid();
    }

    generateGuid() {
        this.id = uuid();
    }
}

module.exports = Guid;
