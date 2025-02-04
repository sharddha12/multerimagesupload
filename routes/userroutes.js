const express=require('express');
const routes=express.Router();
const {uploaduserimage}=require("../helper/multer")
const {userCitizenship}=require("../helper/multer")



routes.post("/uploadpp",uploaduserimage);
routes.post("/uploadpic",userCitizenship);



module.exports=routes;
