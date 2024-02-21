const Sequelize = require("sequelize"); //Importing sequelize module

require('dotenv').config(); //Importing dotenv library to sync environment varibales

console.log(process.env.DB_USER)

//Creating a new sequelize instance and establishing connection with the database
const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
    }
);

module.exports = sequelize;

// require('dotenv').config();

// const Sequelize = require('sequelize');

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

// module.exports = sequelize;