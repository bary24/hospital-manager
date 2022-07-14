const express=require('express');
const patientsRouter=express.Router();
const {getAllPatients,addPatient,editPatient,deletePatient}=require("./patients.controller");



patientsRouter.get("/",getAllPatients);
patientsRouter.post("/",addPatient);
patientsRouter.put("/:id",editPatient);
patientsRouter.delete("/:id",deletePatient);


module.exports=patientsRouter;