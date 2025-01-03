const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./student.js');

const Course = sequelize.define('Course', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
});

Student.hasMany(Course, { foreignKey: 'studentId', as: 'courses' });
Course.belongsTo(Student, { foreignKey: 'studentId', as: 'student' });

module.exports = Course;
