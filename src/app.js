const express = require("express");
const morgan = require("morgan");
const doctorsRouter = require("./routes/doctors/doctors.router");
const drugsRouter = require("./routes/drugs/drugs.router");
const patientsRouter = require("./routes/patients/patients.router");
const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use("/doctors",doctorsRouter);  //doctors endpoint//
app.use("/drugs",drugsRouter);      //drugs endpoint//
app.use("/patients",patientsRouter); //patients endpoint//




module.exports = app;