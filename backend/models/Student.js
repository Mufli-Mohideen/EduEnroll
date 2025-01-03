const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    nic: { 
        type: DataTypes.STRING, 
        allowNull: false, 
        validate: { isAlphanumeric: true }
    },
    age: { type: DataTypes.INTEGER, allowNull: false },
    gender: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: { isIn: [['male', 'female']] }
    },    
});

module.exports = Student;
