const express = require('express');
const jwt = require('jsonwebtoken');
const helper = require('../utils/helper');
const crypt = require('../utils/helper');
const { Librarian } = require('./../database/db');
const { ErrorResult, Result } = require('./../utils/base_response');
const router = express.Router();
router.use((req, res, next) => {
    next();
});

router.post('/createuser', (req, res) => {
    req.body.password = crypt.hash(req.body.password);
    Librarian.create(req.body).then(type => {
        res.json(Result(type));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});


router.post('/login', (req, res) => {
    User.findOne({
        where: {
            userName: req.body.userName,
            password: crypt.hash(req.body.password)
        }
    }).then(aUser => {
        if (aUser != null) {
            const token = jwt.sign({ userId: aUser.id, userName: aUser.userName },
                helper.appKey, { expiresIn: '4h' });
            return res.json(Result({
                id: aUser.id,
                userName: aUser.userName,
                fullName: aUser.fullName,
                token: token
            }));
        } else {
            res.status(200).send(ErrorResult(401, 'Invalid username or password'));
        }
    });
});
module.exports = router;