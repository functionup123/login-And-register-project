const express=require('express')
const router=express.Router()
const userController=require('../controller/userController')

router.get("/",(req,res)=>{
    res.send("My Api's")
})


router.post("/register",userController.createUser)

router.post("/login",userController.checkLogin)
   

module.exports= router 