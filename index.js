const express = require('express');
const port = 8000;
const app = express();
const mongoose = require('mongoose');

const db = require('./config/mongoose')
const passport = require('passport');
// const JWTstrategy = require('./config/passport_jwt_strategy');

app.use(express.json());

app.use('/',require('./routes'));


app.listen(port,(err)=>{
    if (err){
            console.log('error in starting app ',err);
            }
            console.log('server is up and running',port);
})






