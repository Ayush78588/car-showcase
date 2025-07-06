const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function isUserAuth(req, res, next){
    try{
        
        const token = req.cookies.accessToken;
    
        if(!token) {
            return res.status(400).json({msg: "Please login."});
        }
        
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        const userData = await User.findOne({emailId: payload.emailId});
        req.user = userData;
         next();
         
    }catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
}


module.exports = isUserAuth;
