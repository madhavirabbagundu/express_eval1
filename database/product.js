const  mongoose  = require("mongoose");

const  productName = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
        

})
const productData = new mongoose.model("products",productName)
 module.exports= productData