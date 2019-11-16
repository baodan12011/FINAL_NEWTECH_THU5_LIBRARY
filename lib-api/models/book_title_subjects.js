module.exports = (sequelize, type) => {
    return sequelize.define('BookTitleSubjects', {
        id: {
            field: 'id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idBookTitle: {
            field: 'idBookTitle',
            type: type.STRING,
            allowNull: false,
        },
        idSubject: {
            field: 'idSubject',
            type: type.STRING,
            allowNull: false,
        },
        isActive: {
            field: 'isActive',
            type: type.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: false
    });
}