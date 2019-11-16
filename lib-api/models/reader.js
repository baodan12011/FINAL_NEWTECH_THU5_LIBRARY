module.exports = (sequelize, type) => {
    return sequelize.define('Reader', {
        idReader: {
            field: 'idReader',
            type: type.STRING,
            primaryKey: true,
        },
        fullName: {
            field: 'fullName',
            type: type.STRING,
            allowNull: false,
        },
        identityCardNumber: {
            field: 'identityCardNumber',
            type: type.STRING,
            allowNull: false,
        },
        gender: {
            field: 'gender',
            type: type.STRING,
        },
        address: {
            field: 'address',
            type: type.STRING,
        },
        dateOfBirth: {
            field: 'dateOfBirth',
            type: type.DATE,
        },
        email: {
            field: 'email',
            type: type.STRING,
        },
        phone: {
            field: 'phone',
            type: type.STRING,
        },
        registerDate: {
            field: 'registerDate',
            type: type.DATE,
            allowNull: false,
        },
        avatar: {
            field: 'avatar',
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
        idReaderType: {
            field: 'idReaderType',
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