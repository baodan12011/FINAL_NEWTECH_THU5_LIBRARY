module.exports = (sequelize, type) => {
    return sequelize.define('BookTitleAuthors', {
        id: {
            field: 'id',
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ibBookTitle: {
            field: 'idBookTitle',
            type: type.STRING,
            allowNull: false,
        },
        idAuthor: {
            field: 'idAuthor',
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