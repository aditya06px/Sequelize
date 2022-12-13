const { Sequelize, DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './config/dataB.sqlite'
});

const Person = sequelize.define('Person', {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    
  });


sequelize.sync()
 .then(()=>console.log('DB is ready '));  




  
