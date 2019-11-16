const Sequelize = require('sequelize');

const BookModel = require('../models/book');
const ReaderModel = require('../models/reader');
const AuthorModel = require('../models/author');
const SubjectModel = require('../models/subject');
const LoanSlipModel = require('../models/loan_slip');
const LibrarianModel = require('../models/librarian');
const BookTitleModel = require('../models/book_title');
const ReaderTypeModel = require('../models/reader_type');
const LoanSlipDetailModel = require('../models/loan_slip_detail');
const BookTitleAuthorsModel = require('../models/book_title_authors');
const BookTitleSubjectsModel = require('../models/book_title_subjects');

const sequelize = new Sequelize('library', 'sa', '12345', {
    dialect: 'mssql',
    host: 'localhost',
    dialectOptions: {
        "options": {
            "instanceName": "SQLEXPRESS",
        }
    },
    pool: {
        min: 0,
        max: 20,
        idle: 10000,
        acquire: 30000,
    },
    logging: true,
});

const Book = BookModel(sequelize, Sequelize);
const Reader = ReaderModel(sequelize, Sequelize);
const Author = AuthorModel(sequelize, Sequelize);
const Subject = SubjectModel(sequelize, Sequelize);
const LoanSlip = LoanSlipModel(sequelize, Sequelize);
const BookTitle = BookTitleModel(sequelize, Sequelize);
const Librarian = LibrarianModel(sequelize, Sequelize);
const ReaderType = ReaderTypeModel(sequelize, Sequelize);
const LoanSlipDetail = LoanSlipDetailModel(sequelize, Sequelize);
const BookTitleAuthors = BookTitleAuthorsModel(sequelize, Sequelize);
const BookTitleSubjects = BookTitleSubjectsModel(sequelize, Sequelize);

BookTitle.hasMany(BookTitleAuthors, {
    foreignKey: 'idBookTitle',
    as: 'BookTitleAuthors'
});
BookTitleAuthors.belongsTo(BookTitle, {
    foreignKey: 'idBookTitle',
    as: 'BookTitle'
});

Author.hasMany(BookTitleAuthors, {
    foreignKey: 'idAuthor',
    as: 'BookTitleAuthors'
});
BookTitleAuthors.belongsTo(Author, {
    foreignKey: 'idAuthor',
    as: 'Author'
});

BookTitle.hasMany(BookTitleSubjects, {
    foreignKey: 'idBookTitle',
    as: 'BookTitleSubjects'
});
BookTitleAuthors.belongsTo(BookTitle, {
    foreignKey: 'idBookTitle',
    as: 'BookTitles'
});

Subject.hasMany(BookTitleSubjects, {
    foreignKey: 'idSubject',
    as: 'BookTitleSubjects'
});
BookTitleSubjects.belongsTo(Subject, {
    foreignKey: 'idSubject',
    as: 'Subject'
});

BookTitle.hasMany(Book, {
    foreignKey: 'idBookTitle',
    as: 'Book'
});
Book.belongsTo(BookTitle, {
    foreignKey: 'idBookTitle',
    as: 'BookTitle'
});

// Book.hasMany(InputBookDetail, {
//     foreignKey: 'idBook',
//     as: 'InputBookDetail'
// });
// InputBookDetail.belongsTo(Book, {
//     foreignKey: 'idBook',
//     as: 'Book'
// });

// Librarian.hasMany(InputBookDetail, {
//     foreignKey: 'idLibrarian',
//     as: 'InputBookDetail'
// });
// InputBookDetail.belongsTo(Librarian, {
//     foreignKey: 'idLibrarian',
//     as: 'Librarian'
// });

ReaderType.hasMany(Reader, {
    foreignKey: 'idReaderType',
    as: 'Reader'
});
Reader.belongsTo(ReaderType, {
    foreignKey: 'idReaderType',
    as: 'ReaderType'
});

LoanSlip.hasMany(LoanSlipDetail, {
    foreignKey: 'idLoanSlip',
    as: 'LoanSlipDetail'
});
LoanSlipDetail.belongsTo(LoanSlip, {
    foreignKey: 'idLoanSlip',
    as: 'LoanSlip'
});

Reader.hasMany(LoanSlip, {
    foreignKey: 'idReader',
    as: 'LoanSlip'
});
LoanSlip.belongsTo(Reader, {
    foreignKey: 'idReader',
    as: 'Reader'
});

Book.hasMany(LoanSlipDetail, {
    foreignKey: 'idBook',
    as: 'LoanSlipDetail'
});
LoanSlipDetail.belongsTo(Book, {
    foreignKey: 'idBook',
    as: 'Book'
});

// sequelize.sync({ force: true }).then(() => {
//     console.log('Database & tables created !');
// });

module.exports = {
    Book,
    Reader,
    Author,
    Subject,
    LoanSlip,
    Librarian,
    BookTitle,
    ReaderType,
    LoanSlipDetail,
    BookTitleAuthors,
    BookTitleSubjects,
}