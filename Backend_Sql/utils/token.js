const res = require('express/lib/response');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function signAccessToken(id,role){
    try{
        const secretKey = process.env.accessTokenSecretKey;
        const payload = {
            aud:id,
            role:role
        } 
        const options = {
            expiresIn : '1d'
        }
        const token = jwt.sign(payload,secretKey,options);
        return token;
    }
    catch(err){
        res.status(500).json({"message":"Server Error!"});
    }
    
}

module.exports = signAccessToken;