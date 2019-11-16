module.exports = (sequelize, type) => {
    return sequelize.define('Subject', {
        idSubject: {
            field: 'idSubject',
            type: type.STRING,
            primaryKey: true,
        },
        name: {
            field: 'name',
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