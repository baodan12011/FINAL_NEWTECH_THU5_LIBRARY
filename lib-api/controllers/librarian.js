const { hashId } = require('../utils/helper');
const { Librarian } = require('../database/db');
const { Result, ErrorResult } = require('../utils/base_response');

const attributes = ['idLibrarian', 'fullName', 'email', 'phone', 'userName'];

module.exports.getAllLibrarians = function (req, res, next) {
    Librarian.findAll({
        attributes,
        where: {
            isActive: 1,
        }
    }).then(librarians => {
        res.json(Result(librarians));
    });
}

module.exports.getAnLibrarian = function (req, res, next) {
    Librarian.findByPk(req.params.idLibrarian, {
        attributes
    }).then(librarian => {
        if (librarian != null) {
            res.json(Result(librarian));
        } else {
            res.json(ErrorResult(204, "Not data found !"));
        }
    });
}

module.exports.createAnLibrarian = function (req, res, next) {
    const librarian = {
        idLibrarian: hashId(new Date().toLocaleString()),
        ...req.body,
        isActive: 1,
    }
    Librarian.create(librarian).then(resp => {
        res.json(Result(resp));
    }).catch(err => {
        res.json(ErrorResult(500, err.errors));
    });
}

module.exports.updateAnLibrarian = function (req, res, next) {
    Librarian.findByPk(req.params.idLibrarian).then(librarian => {
        if (librarian != null) {
            librarian.update({
                email: req.body.email,
                phone: req.body.phone,
                userName: req.body.userName,
                fullName: req.body.fullName,
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

module.exports.deleteAnLibrarian = function (req, res, next) {
    Librarian.findByPk(req.params.idLibrarian).then(librarian => {
        if (librarian != null) {
            librarian.update({
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

module.exports.importLibrarians = function (req, res, next) {
    // Save list Librarian from Client
}

module.exports.searchLibrarians = function (req, res, next) {
    // Search Librarian from db.
}