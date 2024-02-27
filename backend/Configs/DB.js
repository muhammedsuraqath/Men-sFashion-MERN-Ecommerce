const mongoose=require("mongoose");
const env=require("dotenv");
env.config();
mongoose.set('strictQuery', false);
const url="mongodb://localhost:27017/";
const database_connection=mongoose.connect(url);
module.exports=database_connection;