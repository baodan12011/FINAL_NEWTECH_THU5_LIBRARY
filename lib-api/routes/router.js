var express = require('express')
var router = express()

const bookController = require('./../controllers/book');
const readerController = require('./../controllers/reader');
const uploadController = require('./../controllers/upload');
const authorController = require('./../controllers/author');
const subjectController = require('./../controllers/subject');
const loanSlipController = require('./../controllers/loan_slip');
const bookTitleController = require('./../controllers/book_title');
const librarianController = require('./../controllers/librarian');
const readerTypeController = require('./../controllers/reader_type');
const librarianloginController = require('./../controllers/librarianlogin');
// Author //
router.route('/authors')
    .get(authorController.getAllAuthors)
    .post(authorController.createAnAuthor)

router.route('/authors/:idAuthor')
    .get(authorController.getAnAuthor)
    .put(authorController.updateAnAuthor)

router.route('/authors/status/:idAuthor')
    .delete(authorController.deleteAnAuthor)

// Subject //
router.route('/subjects')
    .get(subjectController.getAllSubjects)
    .post(subjectController.createAnSubject)

router.route('/subjects/:idSubject')
    .get(subjectController.getAnSubject)
    .put(subjectController.updateAnSubject)

router.route('/subjects/status/:idSubject')
    .delete(subjectController.deleteAnSubject)

router.route('/subjects/imports')
    .post(subjectController.importSubjects)

// Librarian //
router.route('/librarians')
    .get(librarianController.getAllLibrarians)
    .post(librarianController.createAnLibrarian)

router.route('/librarians/:idLibrarian')
    .get(librarianController.getAnLibrarian)
    .put(librarianController.updateAnLibrarian)

router.route('/librarians/status/:idLibrarian')
    .delete(librarianController.deleteAnLibrarian)

// Book //
router.route('/books')
    .get(bookController.getAllBooks)
    .post(bookController.createAnBook)

router.route('/books/:idBook')
    .get(bookController.getAnBook)
    .put(bookController.updateAnBook)

router.route('/books/status/:idBook')
    .delete(bookController.deleteAnBook)

// Reader //
router.route('/readers')
    .get(readerController.getAllReaders)
    .post(readerController.createAnReader)

router.route('/readers/:idReader')
    .get(readerController.getAnReader)
    .put(readerController.updateAnReader)

router.route('/readers/status/:idReader')
    .delete(readerController.deleteAnReader)

// ReaderType //
router.route('/reader-type')
    .get(readerTypeController.getAllReaderTypes)
    .post(readerTypeController.createAnReaderType)

router.route('/reader-type/:idReaderType')
    .get(readerTypeController.getAnReaderType)
    .put(readerTypeController.updateAnReaderType)

router.route('/reader-type/status/:idReaderType')
    .delete(readerTypeController.deleteAnReaderType)

// Booktitle //
router.route('/book-title')
    .get(bookTitleController.getAllBookTitles)
    .post(bookTitleController.createAnBookTitle) //

router.route('/book-title/:idBookTitle')
    .get(bookTitleController.getAnBookTitle) //
    .put(bookTitleController.updateAnBookTitle)

router.route('/book-title/status/:idBookTitle')
    .delete(bookTitleController.deleteAnBookTitle)

// LoanSlip
router.route('/loan-slip')
    .get(loanSlipController.getAllLoanSlips)
    .post(loanSlipController.createAnLoanSlip) //

router.route('/loan-slip/:idLoanSlip')
    .get(loanSlipController.getAnLoanSlip)

router.route('/loan-slip/status/:idLoanSlip')
    .delete(loanSlipController.deleteAnLoanSlip)

// Upload
router.use('/storage/upload', uploadController);


module.exports = router