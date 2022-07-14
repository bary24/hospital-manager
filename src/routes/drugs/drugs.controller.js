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
        const result=await Drugs.updateOne({id:req.params.id},updateData);
        if (result.acknowledged){
            res.status(201).json("Document updated successfully")
        }
    }catch(err){
       console.log(err);
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
        console.log(req.params.id);
const result=await Drugs.findByIdAndDelete(req.params.id);
if(typeof result!=="undefined"){
    res.status(200).json("Document deleted successfully")
}

    }catch(err){
        console.log(err);

    }
}


module.exports={
    addDrug,
    editDrug,
    getAllDrugs,
    deleteDrug
}