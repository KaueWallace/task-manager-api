const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()

const database = process.env.DB_NAME
const host = process.env.DB_HOST
const username = process.env.DB_USER
const password = process.env.DB_PASS
const dialect = process.env.DB_DIALECT


const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect
});


module.exports = { 
    sequelize,
    DataTypes
}