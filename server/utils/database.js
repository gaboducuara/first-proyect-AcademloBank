const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'bani12',
    database: 'bank',
    logging: false,
});

module.exports = { db };