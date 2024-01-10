const jwt = require('jsonwebtoken');
require('dotenv').config();

async function verifyAccessToken(req,res,next){
    try{
        const token = req.cookies.accessToken;
        console.log(token);
        const secretKey = process.env.accessTokenSecretKey;
        const decoded =  jwt.verify(token,secretKey);
        req.admin = decoded;
        next()
    }
    catch(err){
        res.status(401).json({
            "message": "Unauthorized User"
        })
    }
}

module.exports = verifyAccessToken;
