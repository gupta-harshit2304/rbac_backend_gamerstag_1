const superAdminModel = require('../models/superAdmin.model');
const branchManagerModel = require('../models/branchManager.model');
const salesPersonModel = require('../models/salesPerson.model');

async function getUserList(req,res){
    try{
        const admin = req.admin;
        if(admin.role === 'superAdmin'){
            const branchManagers = await branchManagerModel.findAll({attributes:['id','userName']});
            const salesPersons = await salesPersonModel.findAll({attributes:['id','userName']});
            res.status(200).json({branchManagers:branchManagers, salesPersons:salesPersons});
        } else if(admin.role === 'branchManager'){
            const salesPersons = await salesPersonModel.findAll({where: {branchManagerAssociated:admin.aud},attributes:['id','userName']});
            res.status(200).json({salesPersons:salesPersons});
        }
    }
    catch(err){
        res.status(500).json({"message":"Server Error!"});
    }
}
module.exports = getUserList;