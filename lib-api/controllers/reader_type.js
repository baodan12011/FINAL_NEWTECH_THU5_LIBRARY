const { hashId } = require('../utils/helper');
const { ReaderType } = require('../database/db');
const { Result, ErrorResult } = require('../utils/base_response');

const attributes = ['idReaderType', 'name', 'bookLimit'];

module.exports.getAllReaderTypes = function (req, res, next) {
    ReaderType.findAll({
        attributes,
        where: {
            isActive: 1,
        }
    }).then(readerTypes => {
        res.json(Result(readerTypes));
    });
}

module.exports.getAnReaderType = function (req, res, next) {
    ReaderType.findByPk(req.params.idReaderType, {
        attributes
    }).then(readerType => {
        if (readerType != null) {
            res.json(Result(readerType));
        } else {
            res.json(ErrorResult(204, "Not data found !"));
        }
    });
}

module.exports.createAnReaderType = function (req, res, next) {
    const readerType = {
        idReaderType: hashId(new Date().toLocaleString()),
        name: req.body.name,
        bookLimit: Number(req.body.bookLimit),
        isActive: 1,
    }
    ReaderType.create(readerType).then(resp => {
        res.json(Result(resp));
    }).catch(err => {
        res.json(ErrorResult(500, err.errors));
    });
}

module.exports.updateAnReaderType = function (req, res, next) {
    ReaderType.findByPk(req.params.idReaderType).then(readerType => {
        if (readerType != null) {
            readerType.update({
                name: req.body.name,
                bookLimit: req.body.bookLimit,
            }).then(resp => {
                res.json(Result(resp));
            }).catch(err => {
                res.json(ErrorResult(500, err.errors));
            });
        } else {
            res.json(ErrorResult(204, "Not data found !"));
        }
    });
}
module.exports.deleteAnReaderType = function (req, res, next) {
    ReaderType.findByPk(req.params.idReaderType).then(readerType => {
        if (readerType != null) {
            readerType.update({
                isActive: 0,
            }).then(resp => {
                res.json(Result(resp));
            }).catch(err => {
                res.json(ErrorResult(500, err.errors));
            });
        } else {
            res.json(ErrorResult(204, "Not data found !"));
        }
    });
}

module.exports.importReaderTypes = function (req, res, next) {
    // Save list ReaderTypes from Client
}

module.exports.searchReaderTypes = function (req, res, next) {
    // Search ReaderTypes from db.
}