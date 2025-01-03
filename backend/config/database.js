const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('StudentDB', 'studentApp', '2003Muf$24', {
    host: 'localhost',
    port: 1433,
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: false,
            trustServerCertificate: true,
        },
    },
});

module.exports = sequelize;
