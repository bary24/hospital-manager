const Patients=require("../../models/patients")
//Get request handler//
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

    //Put request handler//
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
    
//Post request handler//


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
    //Delete request handler//
//finding patient by Id from the patients collection and deletes it//

    async function deletePatient(req,res){
        try{
    const result=await Patients.findByIdAndDelete(req.params.id,{lean:true});
    if(result.age){            //the request returns the updated document ,this checks 
                               //if the document is returned before sending a success response
        res.status(200).json("Document deleted successfully");

    }
    
        }catch{
           res.status(404).json("No document was found matching the entered id");  // returns not found if there is no document matching the entered Id//
    
        }
    }
    
    
    module.exports={
        addPatient,
        editPatient,
        getAllPatients,
        deletePatient
    }