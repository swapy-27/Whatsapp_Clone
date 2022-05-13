const cryptoJS = require('crypto-js')

module.exports.saltKey=()=> {
    let length = 10;
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

module.exports.hashKey=  (password,saltKey)=>{
  
  var hash =  cryptoJS.SHA256(password+saltKey);
  return hash.toString();
}