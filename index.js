const express = require('express');
const port = 8000;
const app = express();



app.use('/',require('./routes'));


app.listen(port,(err)=>{
    if (err){
            console.log('error in starting app ',err);
            }
            console.log('server is up and running',port);
})






