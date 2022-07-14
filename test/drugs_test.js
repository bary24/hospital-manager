const startServer = require("../src/server");
const assert = require("assert");
const request = require("supertest");
const app = require("../src/app");

describe("Testing APIs connected to a mongoDB ",()=>{
before(async()=>{
    await startServer;
});


describe("Testing drugs requests",async()=>{
it("Testing drugs get request",async ()=>{
    const response=await request(app).get("/drugs");
   assert(response.statusCode===200);
    

});

it("Testing drugs post request",async()=>{
const response=await request(app).post("/drugs").send({
    tradeName:"Panadol",
    dosagePerDay:3,
    price:"80 egp"
});
  assert(response.statusCode===201);
  
});

// The id added in put and delete requests should conform to a document's id 
// inside the corresponding collection

it("Testing drugs put request",async()=>{
    const response=await request(app).put("/drugs/62cf49312b48ca756cbcb937").send({
        tradeName:"Lustral"
    });
    assert(response.statusCode===200);
    

   
});

it("Testing doctors delete request",async ()=>{
    const response =await request(app).del("/drugs/62cf49312b48ca756cbcb937");
    assert(response.statusCode===200);
    
});

    
});

});