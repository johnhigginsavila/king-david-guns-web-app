var Sequelize = require('sequelize');
var yourDB = "postgres://kpjzummocwbjzi:596e3ee0d484ae7b669c48fc7b425d252e7292e3d5ca6b8b0c04a10ac9d56b9b@ec2-107-20-141-145.compute-1.amazonaws.com:5432/dbhk4v7jk8oosd";
var sequelize = new Sequelize(yourDB, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true
        }
    }
});

module.exports = sequelize;