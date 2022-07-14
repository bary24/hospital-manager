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
        const result=await Doctors.updateOne({id:req.params.id},updateData);
        if (result.acknowledged){
            res.status(201).json("Document updated successfully")
        }
    }catch(err){
       console.log(err);
    }

}


async function deleteDoctor(req,res){
    try{
        console.log(req.params.id);
const result=await Doctors.findByIdAndDelete(req.params.id);
if(typeof result!=="undefined"){
    res.status(200).json("Document deleted successfully")
}

    }catch(err){
        console.log(err);

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