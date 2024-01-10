const superAdminModel = require('../models/superAdmin.model');
const branchManagerModel = require('../models/branchManager.model');
const salesPersonModel = require('../models/salesPerson.model');
const bcrypt = require('bcrypt');

async function registerUser(req,res){
    try{
        const admin = req.admin;
        const {id,role,userName,password,contactNo} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const checkBranchManager = await branchManagerModel.findOne({where:{id}});
        const checkSalesPerson = await salesPersonModel.findOne({where:{id}});
        if(checkBranchManager || checkSalesPerson){
            res.status(400).json({"message":"User-Id already exists"});
            return;
        }
        if(admin.role === 'superAdmin'){
            if(role === 'branchManager'){
                const newBranchManager = await branchManagerModel.create({
                    id,
                    role,
                    userName,
                    password:hashedPassword,
                    contactNo,
                })
                await newBranchManager.save();
                res.status(201).json({"message":"Branch-Manager Created Successfully"});
            } else if(role === 'salesPerson'){
                const newsalesPerson = await salesPersonModel.create({
                    id,
                    role,
                    userName,
                    password:hashedPassword,
                    contactNo
                });
                await newsalesPerson.save();
                res.status(201).json({"message":"Sales Person Created Successfully"});
            }
        }  else if(admin.role === 'branchManager'){
            
            const newsalesPerson = await salesPersonModel.create({
                id,
                role,
                userName,
                password:hashedPassword,
                contactNo,
                branchManagerAssociated: admin.aud
            });
            await newsalesPerson.save();
            res.status(201).json({"message":"Sales Person Created Successfully"});
        }
    }
    catch(err){
        res.status(500).json({"message":"Server Error!"});
    }
    
}

module.exports = registerUser;



