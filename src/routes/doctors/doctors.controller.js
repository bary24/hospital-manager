const Doctors=require("../../models/doctors");


async function getAllDoctors(req,res){
const doctors=await Doctors.find({});
if(typeof doctors=="undefined"){
    console.log("Something went wrong");
}
res.status(200).json(doctors);
}

async function editDoctor(req,res){
    try{
        const updateData=req.body;
        const result=await Doctors.findByIdAndUpdate(req.params.id,updateData,{lean:true});
        if (result.email){
            res.status(200).json("Document updated successfully")
        }
    }catch{
       res.status(404).json("No document found matching the entered id")
    }

}


async function deleteDoctor(req,res){
    try{
const result=await Doctors.findByIdAndDelete(req.params.id,{lean:true});
if(result.email){
    res.status(200).json("Document deleted successfully")
}

    }catch{
        res.status(404).json("No document found matching the entered id")

    }
}

async function addDoctor(req,res){
    try{
        if(req.body){
            const doctorInfo=req.body;
            const doctor= await Doctors.create(doctorInfo);
            await doctor.save();
            res.status(201).json("Document added sucessfully");
        
        }
       

    }catch(err){
        res.json({
            error:err
        })
    }

}


module.exports={
    getAllDoctors,
    editDoctor,
    deleteDoctor,
    addDoctor
}