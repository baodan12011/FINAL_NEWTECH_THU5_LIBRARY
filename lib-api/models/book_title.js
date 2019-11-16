module.exports = (sequelize, type) => {
    return sequelize.define('BookTitle', {
        idBooktitle: {
            field: 'idBookTitle',
            type: type.STRING,
            primaryKey: true,
        },
        title: {
            field: 'title',
            type: type.STRING,
            allowNull: false,
        },
        edition: {
            field: 'edition',
            type: type.INTEGER,
        },
        page: {
            field: 'page',
            type: type.INTEGER,
        },
        size: {
            field: 'size',
            type: type.INTEGER,
        },
        publishingInfo: {
            field: 'publishingInfo',
            type: type.STRING,
        },
        callNumber: {
            field: 'callNumber',
            type: type.STRING,
            allowNull: false,
        },
        ISBN: {
            field: 'ISBN',
            type: type.STRING,
            allowNull: false,
        },
        description: {
            field: 'description',
            type: type.STRING,
        },
        photo: {
            field: 'photo',
            type: type.STRING,
        },
        yearPublish: {
            field: 'yearPublish',
            type: type.INTEGER,
        },
        numberOfBooks: {
            field: 'numberOfBooks',
            type: type.INTEGER,
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