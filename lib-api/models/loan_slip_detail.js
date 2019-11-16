module.exports = (sequelize, type) => {
    return sequelize.define('LoanSlipDetail', {
        idLoanSlipDetail: {
            field: 'idLoanSlipDetail',
            type: type.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
        },
        idLoanSlip: {
            field: 'idLoanSlip',
            type: type.STRING,
            allowNull: false,
        },
        idBook: {
            field: 'idBook',
            type: type.STRING,
            allowNull: false,
        },
        dateReturn: {
            field: 'dateReturn',
            type: type.DATE,
        },
        isActive: {
            field: 'isActive',
            type: type.INTEGER,
            allowNull: false,
        }
    }, {timestamps: false});
}