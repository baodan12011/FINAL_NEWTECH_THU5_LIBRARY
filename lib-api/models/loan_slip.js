module.exports = (sequelize, type) => {
    return sequelize.define('LoanSlip', {
        idLoanSlip: {
            field: 'idLoanSlip',
            type: type.STRING,
            primaryKey: true,
        },
        idReader: {
            field: 'idReader',
            type: type.STRING,
            allowNull: false,
        },
        idLibrarian: {
            field: 'idLibrarian',
            type: type.STRING,
            allowNull: false,
        },
        dateBorrow: {
            field: 'dateBorrow',
            type: type.DATE,
            allowNull: false,
        },
        dateWillReturn: {
            field: 'dateWillReturn',
            type: type.DATE,
            allowNull: false,
        },
        quantity: {
            field: 'quantity',
            type: type.INTEGER,
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