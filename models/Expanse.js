const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Expanse=sequelize.define('Expanse',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    },
    expanse:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
});

module.exports=Expanse;