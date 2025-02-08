const express=require('express');
const app=express();
const connectDB=require('./configuration/db.js');
connectDB();
const ejs = require('ejs');
app.use(express.json());

app.use(express.urlencoded({extended:true}));
const userroutes=require('./routes/userroutes');
app.set("view engine","ejs");
    app.set("views","./views");
app.use("/api/user/",userroutes);

    app.get("/",(req,res)=>{
        res.render("create") 
    })
    app.get("/home",(req,res)=>{
        res.render("login")
    });
   
// making the por
const port=1111;
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
    
