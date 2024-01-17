const express=require("express");
const userRouter=express.Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
require("dotenv").config()
const { userModel } = require("../model/user.model");


userRouter.post("/register",async(req,res)=>{
   try {
    const {name,username,email,phone,password}=req.body;

     // Check for missing fields
  const missingFields = [];
  if (!name) missingFields.push('name');
  if (!username) missingFields.push('username');
  if (!email) missingFields.push('email');
  if (!phone) missingFields.push('phone');
  if (!password) missingFields.push('password');

  // If any fields are missing, return an error
  if (missingFields.length > 0) {
    return res.status(400).json({ msg: `Please fill in the following fields: ${missingFields.join(',')}` });
  }
    const existinguser= await userModel.find({email});

    if (existinguser.length){
        return res.status(201).json({msg:"User has already registered,please login"})
    }

    bcrypt.hash(password,5,async(err,hash)=>{

        if (err){
            return res.status(400).json({msg:err.message})
        }
        else{
            const newuser= new userModel({name,username,email,phone,password:hash});
            await newuser.save();
            return res.status(200).json({msg:"Registered successfully"})
        }
    })



   } catch (error) {
    res.status(500).json({error:error.message})
   }
})


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;

    const missingFields = [];
    if (!email) missingFields.push('email');
    if (!password) missingFields.push('password');
  
    // If any fields are missing, return an error
    if (missingFields.length > 0) {
      return res.status(200).json({ msg: `Please fill in the following fields: ${missingFields.join(',')}` });
    }
    try {
        const existinguser= await userModel.findOne({email});
        if (!existinguser){
           
            return res.status(404).json({msg:"User not found,please create account"})
        }
        bcrypt.compare(password,existinguser.password,async(err,result)=>{
            if (result){
                const token=jwt.sign({userID:existinguser._id,username:existinguser.name},process.env.secretKey);
                return res.status(200).json({msg:"Login successfully",token:token})

            }
            else{
                return res.status(400).json({error:"Wrong credential"})
            }
        })
    
    } catch (error) {
     res.status(500).json({error:error.message})
    }
})

module.exports={userRouter}