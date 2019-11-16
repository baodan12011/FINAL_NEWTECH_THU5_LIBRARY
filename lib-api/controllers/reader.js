const { Reader } = require('../database/db');
const { hashId } = require('../utils/helper');
const { Result, ErrorResult } = require('../utils/base_response');

const attributes = ['idReader', 'fullName', 'identityCardNumber', 'email', 'phone', 'registerDate', 'avatar'];

module.exports.getAllReaders = function(req, res, next) {
    Reader.findAll({
        attributes,
        where: {
            isActive: 1
        }
    }).then(reader => {
        res.json(Result(reader));
    });
}

module.exports.getAnReader = function(req, res, next) {
    Reader.findByPk(req.params.idReader, {
        attributes
    }).then(reader => {
        if (reader != null) {
            res.json(Result(reader));
        } else {
            res.json(ErrorResult(204, "Not data found !"));
        }
    });
}

module.exports.createAnReader = function(req, res, next) {
    const reader = {
        idReader: hashId(new Date().toLocaleString()),
        ...req.body,
        isActive: 1,
    }
    Reader.create(reader).then(resp => {
        res.json(Result(resp));
    }).catch(err => {
        res.json(ErrorResult(500, err.errors));
    });
}

module.exports.updateAnReader = function(req, res, next) {
    Reader.findByPk(req.params.idReader).then(reader => {
        if (reader != null) {
            reader.update({
                fullName: req.body.fullName,
                identityCardNumber: req.body.identityCardNumber,
                gender: req.body.gender,
                address: req.body.address,
                dateOfBirth: req.body.address,
                email: req.body.email,
                phone: req.body.phone,
                registerDate: req.body.registerDate,
                avatar: req.body.avatar,
                userName: req.body.userName,
                password: req.body.password,
                idReaderType: req.body.idReaderType,
            }).then(response => {
                res.json(Result(response));
            }).catch(err => {
                res.json(ErrorResult(500, err.errors));
            });
        } else {
            res.json(ErrorResult(204, "Not data found !"));
        }
    });
}

module.exports.deleteAnReader = function(req, res, next) {
    Reader.findByPk(req.params.idReader).then(reader => {
        if (reader != null) {
            reader.update({
                isActive: 0,
            }).then(response => {
                res.json(Result(response));
            }).catch(err => {
                res.json(ErrorResult(500, err.errors));
            });
        } else {
            res.json(ErrorResult(204, "Not data found !"));
        }
    });
}

module.exports.importReaders = function(req, res, next) {
    // Save list Readers from Client
}

module.exports.searchReaders = function(req, res, next) {
    // Search Readers from db.
}