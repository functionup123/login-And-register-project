const userModel=require('../Model/userSchema')
const mongoose=require('mongoose')

const createUser=async function(req,res){
    try{
const user=req.body
let {name,email,password}=req.body
let uniqueEmail=await userModel.findOne({email:email})
if(uniqueEmail){
    console.log("this email is already exist")
    res.send({msg:"this email is already exist"})
}
else{
const userData=await userModel.create(user)
// console.log(userData)
return res.send({msg:"Successfully Registered ,Please login now",data:userData})
}
    }
    catch(err){
        console.log(err)
    }
}

const checkLogin=async function(req,res){
    try{
const loginuser=req.body
let {email,password}=req.body
let uniqueEmail=await userModel.findOne({email:email})
let uniquePassword=await userModel.findOne({password:password})
if(uniqueEmail){
    if(uniquePassword)
    {
   
    res.send({msg:"Login sucessfully",user:uniqueEmail})
    console.log(uniqueEmail)
}
else{
   
    res.send({msg:"incorrect password"})
}
}
    else{
        res.send({msg:"user not registered"})
    }
}
    catch(err){
        console.log(err)
    }
}

module.exports={createUser,checkLogin}