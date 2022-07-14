const mongoose=require("mongoose");
const drugsSchema=new mongoose.Schema({
    tradeName:{
        type:String,
        required:true
    },
    dosagePerDay:{
        type:Number,
        required:true
    },
    price:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model("Drug",drugsSchema);