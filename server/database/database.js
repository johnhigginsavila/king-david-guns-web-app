var Sequelize = require('sequelize');
var yourDB = "postgres://vjggpocwokyfdd:2d64c1698c99e878bab4d25bbf4cd57d67419cafb4bab67e0d29314b750601cc@ec2-23-23-93-255.compute-1.amazonaws.com:5432/d9sr28fl80k5dk";
var sequelize = new Sequelize(yourDB, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true
        }
    }
});

module.exports = sequelize;