const { Book } = require('../database/db');
const { hashId } = require('../utils/helper');
const { Result, ErrorResult} = require('../utils/base_response');

const attributes = ['idBook', 'idBookTitle', 'idLibrarian', 'dateImport', 'status'];

module.exports.getAllBooks = function (req, res, next) {
    Book.findAll({
        attributes,
        where: {
            isActive: 1,
        }
    }).then(books => {
        res.json(Result(books));
    });
}

module.exports.getAnBook = function (req, res, next) {
    Book.findByPk(req.params.idBook, {
        attributes
    }).then(book => {
        if (book != null) {
            res.json(Result(book));
        } else {
            res.json(ErrorResult(204, "Not data found !"));
        }
    });
}

module.exports.createAnBook = function (req, res, next) {
    const book = {
        idBook: hashId(new Date().toLocaleString()),
        ...req.body,
        isActive: 1,
    }
    Book.create(book).then(resp => {
        res.json(Result(resp));
    }).catch(err => {
        res.json(ErrorResult(500, err.errors));
    });
}

module.exports.updateAnBook = function (req, res, next) {
    Book.findByPk(req.params.idBook).then(book => {
        if (book != null) {
            book.update({
                idLibrarian: req.body.idLibrarian,
                dateImport: req.body.dateImport,
                status: req.body.status,
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

module.exports.deleteAnBook = function (req, res, next) {
    Book.findByPk(req.params.idBook).then(book => {
        if (book != null) {
            book.update({
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

module.exports.importBooks = function (req, res, next) {
    // Save list Books from Client
}

module.exports.searchBooks = function (req, res, next) {
    // Search Books from db.
}