module.exports = (sequelize, type) => {
    return sequelize.define('Librarian', {
        idLibrarian: {
            field: 'idLibrarian',
            type: type.STRING,
            primaryKey: true,
        },
        fullName: {
            field: 'fullName',
            type: type.STRING,
            allowNull: false,
        },
        email: {
            field: 'email',
            type: type.STRING,
        },
        phone: {
            field: 'phone',
            type: type.STRING,
        },
        userName: {
            field: 'userName',
            type: type.STRING,
            allowNull: false,
        },
        password: {
            field: 'password',
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