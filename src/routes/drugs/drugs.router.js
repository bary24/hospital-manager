const express=require('express');
const drugsRouter=express.Router();
const {getAllDrugs,addDrug,editDrug,deleteDrug}=require("./drugs.controller");



drugsRouter.get("/",getAllDrugs);
drugsRouter.post("/",addDrug);
drugsRouter.put("/:id",editDrug);
drugsRouter.delete("/:id",deleteDrug);


module.exports=drugsRouter;