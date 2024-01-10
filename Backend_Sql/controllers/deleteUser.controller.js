const superAdminModel = require('../models/superAdmin.model');
const branchManagerModel = require('../models/branchManager.model');
const salesPersonModel = require('../models/salesPerson.model');

async function deleteUser(req,res){
    try{
        const admin = req.admin;
        const userId = req.params.userId; 
        if(admin.role === 'superAdmin'){
            const branchManager = await branchManagerModel.findOne({where: {id:userId}});
            if(branchManager){
                await branchManagerModel.destroy({ where: { id: userId } });
                res.status(204).json({ message: 'User deleted successfully.' });
                return;
            } 
            const salesPerson = await salesPersonModel.findOne({where: {id:userId}});
            if(salesPerson){
                await salesPersonModel.destroy({ where: { id: userId } });
                res.status(204).json({ message: 'User deleted successfully.' });
                return;
            }
            res.status(404).json({ message: 'User Not Found or Incorrect User Id!' });
        } else if (admin.role === 'branchManager') {
            const salesPerson = await salesPersonModel.findOne({where: {id:userId}});
            if(salesPerson){
                if(salesPerson.branchManagerAssociated === admin.aud){
                    await salesPersonModel.destroy({ where: { id: userId } });
                    res.status(204).json({ message: 'User deleted successfully.' });
                } else{
                    res.status(401).json({ message: 'Unauthorized to Delete!' });
                }  
                return; 
            }
            res.status(404).json({ message: 'User Not Found or Incorrect User Id!' });
        }
    }
    catch(err){
        res.status(500).json({"message":"Server Error!"});
    }
}

module.exports = deleteUser;


    
