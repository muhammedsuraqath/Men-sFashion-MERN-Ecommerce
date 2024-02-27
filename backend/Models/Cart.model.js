const mongoose=require("mongoose");
const CartSchema=mongoose.Schema({
    image:String,
    title:String,
    description:String,
    price:String,
    category:String,
    userID:String
});
const CartModel=mongoose.model("mensCart",CartSchema);
module.exports=CartModel;