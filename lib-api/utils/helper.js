const crypto = require('crypto');

const createHashToken = (text) => {
    return crypto.createHash('sha256').update(text, 'utf8').digest('base64');
}

const createHashId = (text) => {
    return crypto.createHash('md5').update(text, 'utf8').digest('hex');
}

module.exports = {
    hashId: createHashId,
    hashToken: createHashToken,
}