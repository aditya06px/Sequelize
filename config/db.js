const { Sequelize } = require('sequelize'); 


// Option 3: Passing parameters separately (other dialects)
const createDB = new Sequelize('databse-name', 'user-name', 'pass-word', {
    host: 'localhost',
    dialect: 'sqlite'
     /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports = createDB;
