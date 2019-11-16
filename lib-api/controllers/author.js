const { hashId } = require('../utils/helper');
const { Author } = require('../database/db');
const { Result, ErrorResult } = require('../utils/base_response');

const attributes = ['idAuthor', 'name'];


module.exports.getAllAuthors = function(req, res, next) {
    Author.findAll({
        attributes,
        where: {
            isActive: 1,
        }
    }).then(authors => {
        res.json(Result(authors))
    });
}

module.exports.getAnAuthor = function(req, res, next) {
    Author.findByPk(req.params.idAuthor, {
        attributes
    }).then(author => {
        if (author != null) {
            res.json(Result(author));
        } else {
            res.json(ErrorResult(204, "Not data found !"));
        }
    });
}

module.exports.createAnAuthor = function(req, res, next) {
    const author = {
        idAuthor: hashId(new Date().toLocaleString()),
        ...req.body,
        isActive: 1,
    }
    Author.create(author)
        .then(response => res.json(Result(response)))
        .catch(err => res.json(ErrorResult(500, err.errors)));
}

module.exports.updateAnAuthor = function(req, res, next) {
    Author.findByPk(req.params.idAuthor).then(author => {
        if (author != null) {
            author.update({
                name: req.body.name,
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

module.exports.deleteAnAuthor = function(req, res, next) {
    Author.findByPk(req.params.idAuthor).then(author => {
        if (author != null) {
            author.update({
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

module.exports.importAuthors = function(req, res, next) {
    const authors = req.body.map((author, index) => {
        return {
            idAuthor: hashId((Date.now().toString() + index)),
            name: author.name,
            isActive: 1,
        }
    });

    Author.bulkCreate(authors)
        .then(resp => res.json(Result(resp)))
        .catch(err => res.json(ErrorResult(err)))
}

module.exports.searchAuthors = function(req, res, next) {
    // Search Author from db.
}