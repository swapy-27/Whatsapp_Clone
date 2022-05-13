const jsonwebtoken = require('jsonwebtoken');
const User = require('../../../models/user');
const utilFunctions = require('../../../providers/strongPassword')




module.exports.createSession = async (req, res) => {


    try {
        let user = await User.findOne({ email: req.body.email });


        if (!user || user.password !== req.body.password) {
            return res.status(422).json({
                message: "Invalid username or password"
            })
        }

        return res.status(200).json({
            message: 'sign In successful',
            data: {
                token: jsonwebtoken.sign(user.toJSON(), 'swapnil', { expiresIn: 30000 })
            }
        })
    }
    catch (err) {
        console.log('*****', err)
        return res.status(500).json({
            message: 'Internal Server Error!'
        })
    }

}


module.exports.createUser = (req, res) => {

    const saltKey = utilFunctions.saltKey()
    const hashKey = utilFunctions.hashKey(req.body.password, saltKey)



    User.create({
        name: req.body.name,
        hashKey: hashKey,
        saltKey: saltKey,
        email: req.body.email
    },

        function (err, user) {

            if (err) {
                console.log(err)
                return res.status(404).json({
                    message: 'unable to create new user!'
                });
            }

            return res.status(200).json({
                message: 'This is ur user',
                user: user
            });
        })


}