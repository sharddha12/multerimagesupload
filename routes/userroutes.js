const express=require('express');
const routes=express.Router();
const {uploaduserimage}=require("../helper/multer")
const {userCitizenship}=require("../helper/multer")
const {studentCitizenship}=require("../helper/multer");//{studentCitizenship}
const user = require('../model/user');
const userController=require("../controller/usercontroller");



routes.post("/uploadpp",uploaduserimage);
routes.post("/uploadpic",userCitizenship);
routes.post("/uploadsc",studentCitizenship);
routes.post("/createuser",userController.createUser);



module.exports=routes;
