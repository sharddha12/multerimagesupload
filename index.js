const express=require('express');
const app=express();
const connectDB=require('./configuration/db.js');
connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const userroutes=require('./routes/userroutes');
app.use("/api/user/",userroutes);
// making the por
const port=1111;
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
    
