const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    administration:Boolean
});
const UserModel=mongoose.model("mensUser",UserSchema);
module.exports=UserModel;