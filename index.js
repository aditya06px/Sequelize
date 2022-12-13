const { Sequelize } = require('sequelize'); 

const createDB = require('./config/db');
const User = require('./models/userModel');

createDB.sync().then(() => console.log("db is ready"));