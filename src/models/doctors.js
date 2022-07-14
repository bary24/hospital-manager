const mongoose = require("mongoose");
const doctorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
     contactNumber: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required:true
  }
});

module.exports=mongoose.model("Doctor",doctorsSchema);

