const mongoose = require('mongoose');


//connect the database
mongoose.connect('mongodb://localhost:27017/whatsapp_backend');

//acquire connection (to check it successful)
const db = mongoose.connection;
console.log(db);
//error
db.on('error',console.log.bind(console,'error connecting to db'));


//up and runnning then print the message
db.once('open',function(){
    console.log('successfullly connected to database');
})

module.exports=   db ;



