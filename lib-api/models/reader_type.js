module.exports = (sequelize, type) => {
    return sequelize.define('ReaderType', {
        idReaderType: {
            field: 'idReaderType',
            type: type.STRING,
            primaryKey: true,
        },
        name: {
            field: 'name',
            type: type.STRING,
            allowNull: false,
        },
        bookLimit: {
            field: 'bookLimit',
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