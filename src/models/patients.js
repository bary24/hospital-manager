const mongoose=require("mongoose");
const patientsSchema=new mongoose.Schema({
    dateOfAdmission:{
        type:Date,
        required:true
    },
    patientName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        max:80,
        min:15
        
    }
});


module.exports=mongoose.model("Patient",patientsSchema);