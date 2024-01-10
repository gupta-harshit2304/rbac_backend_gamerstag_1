const sequelize = require('sequelize');


var mysqlconnection = new sequelize('gamersempdb','root','12345678',{host:'localhost', dialect:'mysql'})


module.exports=mysqlconnection

