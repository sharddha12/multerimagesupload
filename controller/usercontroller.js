const express=require("express");
const User=require("../model/user.js");
exports.createUser=async(req,res)=> {
    try{

        const userdata=await User.create(req.body);
        res.status(201).json(userdata);
    } catch(error) {
        res.status(400).json({error:err.message});
    }
};