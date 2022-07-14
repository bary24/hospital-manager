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
    const response=await request(app).get("/doctors");
    assert(response.statusCode===200);
    

});

it("Testing doctors post request",async()=>{
const response=await request(app).post("/doctors").send({
    name: "Mohamed Fareed 3",
    contactNumber: 2424553,
    email: "mohamedfareed@gmail.com "
  });
  assert(response.statusCode===201);
  
});

it("Testing doctors put request",async()=>{
    const response=await request(app).put("/doctors/62cf25dfc62043a40c705572").send({
        name:"Joseph Ken"
    });
    console.log(response);
    assert(response.statusCode===200);
    

   
})

it("Testing doctors delete request",async ()=>{
    const response =await request(app).del("/doctors/62cf25dfc62043a40c705572");
    assert(response.statusCode===200);
    
})

    
});




});