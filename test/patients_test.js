const startServer = require("../src/server");
const assert = require("assert");
const request = require("supertest");
const app = require("../src/app");

describe("Testing APIs connected to a mongoDB ",()=>{
before(async()=>{
    await startServer;
});


describe("Testing doctors requests",async()=>{
it("Testing Doctors get request",async ()=>{
    const response=await request(app).get("/patients");
   assert(response.statusCode===200);
    

});

it("Testing patients post request",async()=>{
const response=await request(app).post("/patients").send({
    patientName: "Mohamed Fareed 3",
    dateOfAdmission: new Date("2022-04-22"),
    age: 43
  });
  assert(response.statusCode===201);
  
});

it("Testing doctors put request",async()=>{
    const response=await request(app).put("/patients/62d0118230604b741f8b56cd").send({
        patientName:"Joseph Ken"
    });
    assert(response.statusCode===200);
    

   
});

it("Testing doctors delete request",async ()=>{
    const response =await request(app).del("/patients/62d0118230604b741f8b56cd");
    assert(response.statusCode===200);
    
})

    
});




});