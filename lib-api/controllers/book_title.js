const { BookTitle } = require('../database/db');
const { hashId } = require('../utils/helper');
const { Result, ErrorResult } = require('../utils/base_response');

const attributes = ['idBookTitle', 'title', 'edition', 'page', 'size', 'publishingInfo', 'callNumber', 'ISBN', 'description', 'photo', 'yearPublish', 'numberOfBooks'];

module.exports.getAllBookTitles = function(req, res, next) {
    BookTitle.findAll({
        attributes,
        where: {
            isActive: 1
        }
    }).then(bookTitles => {
        res.json(Result(bookTitles));
    });
}

module.exports.getAnBookTitle = function(req, res, next) {
    BookTitle.findByPk(req.params.idBooktitle, {
        attributes
    }).then(bookTitles => {
        if (bookTitles != null) {
            res.json(Result(bookTitles));
        } else {
            res.json(ErrorResult(204, "Not data found !"));
        }
    });
}

module.exports.createAnBookTitle = function(req, res, next) {
    const bookTitle = {
        idBookTitle: hashId(new Date().toLocaleString()),
        ...req.body,
        isActive: 1,
    }
    BookTitle.create(bookTitle).then(resp => {
        res.json(Result(resp));
    }).catch(err => {
        res.json(ErrorResult(500, err.errors));
    });
}

module.exports.updateAnBookTitle = function(req, res, next) {
    BookTitle.findByPk(req.params.idBookTitle).then(bookTitle => {
        if (bookTitle != null) {
            bookTitle.update({
                title: req.body.title,
                edition: req.body.edition,
                page: req.body.page,
                size: req.body.size,
                publishingInfo: req.body.publishingInfo,
                callNumber: req.body.callNumber,
                ISBN: req.body.ISBN,
                description: req.body.description,
                photo: req.body.photo,
                yearPublish: req.body.yearPublish,
                numberOfBooks: req.body.numberOfBooks,
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

module.exports.deleteAnBookTitle = function(req, res, next) {
    BookTitle.findByPk(req.params.idBookTitle).then(bookTitle => {
        if (bookTitle != null) {
            bookTitle.update({
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

module.exports.importBookTitles = function(req, res, next) {
    // Save list BookTitles from Client
}

module.exports.searchBookTitles = function(req, res, next) {
    // Search BookTitles from db.
}