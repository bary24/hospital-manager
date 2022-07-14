const express=require('express');
const doctorsRouter=express.Router();
const{ getAllDoctors,
    editDoctor,
    deleteDoctor,
     addDoctor}=require("./doctors.controller");


doctorsRouter.get("/",getAllDoctors);
doctorsRouter.post("/",addDoctor);
doctorsRouter.put("/:id",editDoctor);
doctorsRouter.delete("/:id",deleteDoctor);


module.exports=doctorsRouter;

