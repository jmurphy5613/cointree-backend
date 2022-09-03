module.exports = function(sequelize, DataTypes) {
    const Job = sequelize.define('Job', {
        wallet: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        jobDescription: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Job;
}