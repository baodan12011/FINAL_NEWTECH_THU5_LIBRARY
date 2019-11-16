module.exports = (sequelize, type) => {
    return sequelize.define('Book', {
        idBook: {
            field: 'idBook',
            type: type.STRING,
            primaryKey: true,
        },
        idBookTitle: {
            field: 'idBookTitle',
            type: type.STRING,
            allowNull: false,
        },
        idLibrarian: {
            field: 'idLibrarian',
            type: type.STRING,
            allowNull: false,
        },
        dateImport: {
            field: 'dateImport',
            type: type.DATE,
            allowNull: false,
        },
        status: {
            field: 'status',
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