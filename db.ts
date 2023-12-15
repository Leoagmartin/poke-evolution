const { Sequelize } = require('sequelize');

const conection = new Sequelize('postgres://postgres:pass123@localhost/pokemons') // Example for postgres


const con = async () => {
    try {
    await conection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

con();