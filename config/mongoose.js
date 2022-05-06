const mongoose = require('mongoose');





//connect the database
mongoose.connect('mongodb://localhost:27017/chat_engine');

//acquire connection (to check it successful)
const db = mongoose.connection;

//error
db.on('error',console.log.bind(console,'error connecting to db'));


//up and runnning then print the message
db.once('open',function(){
    console.log('successfullly connected to database');
})