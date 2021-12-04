// import database handler here 

// ! Sequelize example 
// todo npm install sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = sequelize;


// ! PostGres example 
// todo npm install pg 

const {Client} = require('pg');

const client = new Client(process.env.PG_URL);

client.connect();

module.exports = client;
