const Drugs=require("../../models/drugs");
async function getAllDrugs(req,res){
const drugs=await Drugs.find({});
try{
    if(drugs){
        res.status(200).json(drugs);
    }

}catch(err){
    res.json({
        error:err
    })

}
}
async function editDrug(req,res){
    try{
        const updateData=req.body;
       const result= await Drugs.findByIdAndUpdate ((req.params.id),updateData,{lean:true});
       if(result.tradeName){
        res.status(200).json("Document updated successfully")
       }
        
        }catch{
            res.status(404).json("Document not found");
            
           
    }
}

async function addDrug(req,res){
    try{
        if(req.body){
            const drugInfo=req.body;
            const drug= await Drugs.create(drugInfo);
            await drug.save();
            res.status(201).json("Document added sucessfully");
        
        }
       

    }catch(err){
        res.json({
            error:err
        })
    }

}

async function deleteDrug(req,res){
    try{
const result=await Drugs.findByIdAndDelete(req.params.id,{lean:true});
if(result.tradeName){
    res.status(200).json("Document deleted successfully")
}

    }catch{
       res.status(404).json("No document found matching the entered id")

    }
}


module.exports={
    addDrug,
    editDrug,
    getAllDrugs,
    deleteDrug
}