const { Subject } = require('../database/db');
const { hashId } = require('../utils/helper');
const { Result, ErrorResult } = require('../utils/base_response');

const attributes = ['idSubject', 'name'];

module.exports.getAllSubjects = function (req, res, next) {
    Subject.findAll({
        attributes,
        where: {
            isActive: 1,
        }
    }).then(subjects => {
        res.json(Result(subjects));
    });
}

module.exports.getAnSubject = function (req, res, next) {
    Subject.findByPk(req.params.idSubject, {
        attributes
    }).then(subject => {
        if (subject != null) {
            res.json(Result(subject));
        } else {
            res.json(ErrorResult(204, "Not data found !"));
        }
    });
}

module.exports.createAnSubject = function (req, res, next) {
    const subject = {
        idSubject: hashId(new Date().toLocaleString()),
        ...req.body,
        isActive: 1,
    }
    Subject.create(subject).then(resp => {
        res.json(Result(resp));
    }).catch(err => {
        res.json(ErrorResult(500, err.errors));
    });
}

module.exports.updateAnSubject = function (req, res, next) {
    Subject.findByPk(req.params.idSubject).then(subject => {
        if (subject != null) {
            subject.update({
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

module.exports.deleteAnSubject = function (req, res, next) {
    Subject.findByPk(req.params.idSubject).then(subject => {
        if (subject != null) {
            subject.update({
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

module.exports.importSubjects = function (req, res, next) {
    const subjects = req.body.map((subject, index) => {
        return {
            idSubject: hashId((Date.now().toString() + index)),
            name: subject.name,
            isActive: 1,
        }
    });

    Subject.bulkCreate(subjects)
        .then(resp => res.json(Result(resp)))
        .catch(err => res.json(ErrorResult(err)))
}

module.exports.searchSubjects = function (req, res, next) {
    // Search Subject from db.
}