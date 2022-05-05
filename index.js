const app = require('express');
const port = 5000;







app.listen(port, function(err){
    if (err){
    console.log('error in starting app ',err);
    }
    console.log('server is up and running',err);
})
