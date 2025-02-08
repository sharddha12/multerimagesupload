const express=require("express");
const User=require("../model/user.js");
exports.createUser=async(req,res)=> {
    const {email,password}=req.body;
    try{
        if (!email || !password){
            return res.status(400).json({success:false,message:"email and password are required"});
        }
        const user=new User({email,password});
        await user.save();
        res.status(201).json({success:true,message:"user created successfully"});
    }catch(error)
    
    {
        res.status(500).json({success:false,message:"internal server error"});
    }

        
};
