const Patients=require("../../models/patients")

async function getAllPatients(req,res){
    const patients=await Patients.find({});
    try{
        if(patients){
            res.status(200).json(patients);
        }
    
    }catch(err){
        res.json({
            error:err
        })
    
    }
    }
    async function editPatient(req,res){
        try{
            const updateData=req.body;
            const result=await Patients.findByIdAndUpdate(req.params.id,updateData,{lean:true});
            if (result.age){
                res.status(200).json("Document updated successfully")
            }
        }catch{
           res.status(404).json("No document matching the entered id was found")
        }
    }
    
    async function addPatient(req,res){
        try{
            if(req.body){
                const patientInfo=req.body;
                req.body.dateOfAdmission=new Date(req.body.dateOfAdmission);
                const patient= await Patients.create(patientInfo);
                await patient.save();
                res.status(201).json("Document added sucessfully");
            
            }
           
    
        }catch(err){
            res.json({
                error:err
            })
        }
    
    }
    
    async function deletePatient(req,res){
        try{
    const result=await Patients.findByIdAndDelete(req.params.id,{lean:true});
    if(result.age){
        res.status(200).json("Document deleted successfully");

    }
    
        }catch{
           res.status(404).json("No document was found matching the entered id")
    
        }
    }
    
    
    module.exports={
        addPatient,
        editPatient,
        getAllPatients,
        deletePatient
    }