const express = require("express");
const morgan = require("morgan");
const doctorsRouter = require("./routes/doctors/doctors.router");
const app = express();

app.use(express.json());
app.use(morgan("combined"));
app.use("/doctors",doctorsRouter);




module.exports = app;