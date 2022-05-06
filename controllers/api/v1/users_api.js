const jsonwebtoken = require('jsonwebtoken');
const User = require ('../../../models/user');


 

module.exports.createSession = async (req,res)=>{
    

    try{
        let user = await User.findOne({email:req.body.email});


        if(!user || user.password !== req.body.password){
            return res.status(422).json({
                message:"Invalid username or password"
            })
        }

        return res.status(200).json({
            message:'sign In successful',
            data:{
                token:jsonwebtoken.sign(user.toJSON(),'swapnil',{expiresIn:30000})
            }
        })
    }
    catch(err){
        console.log('*****',err)
        return res.status(500).json({
            message:'Internal Server Error!'
        })
    }

}