const User = require("../models/users")

 exports.register = async (req, res, next) => {
    const {username, password} = req.body
    console.log(username, password)
    if(password.length < 6) {
        return res.status(400).json({
             message: "Password is less then 6 character."
        })
    }
    try {
        await User.create({
            username, password
        }).then(user => res.status(200).json({
            message: "User successfully created",
            user,
        }))
    } catch (err) {
        res.status(401).json({
            message: "User not successful created",
            error: err.message,
        })
    }
}


exports.login = async (req,res,next) => {
    const {username, password} = req.body
    // Check if username and password is provided

    try {
        const user = await User.findOne({
            username, password
        })

        if (!user) {
            res.status(401).json({
                message: "Login is not successful",
                error: "User not found"
            })
        } else {
            res.status(200).json({
                message: "Login successful",
                user,
            })
        }
    } catch(error){
        res.status(400).json({
            message: "An error occured",
            error: error.message,
        })
    }
}
