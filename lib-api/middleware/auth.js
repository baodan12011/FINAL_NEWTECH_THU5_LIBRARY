const jwt = require('jsonwebtoken');
const { key } = require('./../utils/constant');
const { ErrorResult } = require('./../utils/base_response');

module.exports = (req, res, next) => {
    if (req.url == '/api/v1/subjects') { //anonymous api
        next();
    } else {
        const authHeader = req.get('Authorization');
        if (!authHeader) {
            return res.json(ErrorResult(401, 'Not authenticated'));
        }
        const token = authHeader.split(' ')[1];
        console.log(key);
        console.log(token);
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, key);
        } catch (err) {
            return res.json(ErrorResult(401, err.message));
        }
        if (!decodedToken) {
            return res.json(ErrorResult(401, 'Not authenticated'));
        }
        req.userId = decodedToken.userId;
        req.userName = decodedToken.userName;
        next();
    }
}