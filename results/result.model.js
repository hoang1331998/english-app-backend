const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        userId: { type: DataTypes.NUMBER, allowNull: false },
        totalPoint: { type: DataTypes.NUMBER, allowNull: false },
        totalTime: { type: DataTypes.NUMBER, allowNull: false },
        answer: { type: DataTypes.STRING, allowNull: false },
        examId: { type: DataTypes.NUMBER, allowNull: false },
    };

    return sequelize.define('Result', attributes);
}