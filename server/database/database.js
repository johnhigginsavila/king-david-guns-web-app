var Sequelize = require('sequelize');

var dbName = '';
var dbUsername = '';
var password = '';
var config = {
    host: '',
    dialect: 'postgres'
}
var sequelize = new Sequelize(dbName, dbUsername, password, config);

module.exports = sequelize;