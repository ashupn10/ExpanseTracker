const express=require('express');
const bodyParser=require('body-parser');
const ejs=require('ejs');
// const sequelize=require('sequelize');
const sequelize=require('./util/database');
const expanseRoutes=require('./routes/expanse');
const Expanse=require('./models/Expanse');
const app=express();

console.log(Expanse);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.set('view engine','ejs');
app.use('/',expanseRoutes);

sequelize.sync()
.then(()=>{
    app.listen(3000);
})
.catch(err=>console.log(err));