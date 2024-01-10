const superAdminModel = require('../models/superAdmin.model');
const branchManagerModel = require('../models/branchManager.model');
const salesPersonModel = require('../models/salesPerson.model');

async function getProfile(req,res){
    try{
        const user = req.admin;
        if(user.role ==='superAdmin'){
            const userData = await superAdminModel.findOne({where: {id:user.aud}});
            res.status(200).json(userData);
        } else if(user.role === 'branchManager'){
            const userData = await branchManagerModel.findOne({where: {id:user.aud}});
            res.status(200).json(userData);
        } else if(user.role === 'salesPerson'){
            const userData = await salesPersonModel.findOne({where: {id:user.aud}});
            res.status(200).json(userData);
        }
    }
    catch(err){
        res.status(500).json({"message":"Server Error!"});
    }
}

module.exports = getProfile;