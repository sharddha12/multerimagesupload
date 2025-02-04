const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("Database is connected suceessfully");
    }catch(error){
        console.log('Error on database,${err}');
        throw error;
        
    }
}
module.exports=connectDB;