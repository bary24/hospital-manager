const express=require('express');
const drugsRouter=express.Router();



drugsRouter.get("/",getAllDrugs);
drugsRouter.post("/",addDrug);
drugsRouter.put("/:id",editDrug);
drugsRouter.delete("/:id",deleteDrug);


module.exports=drugsRouter;