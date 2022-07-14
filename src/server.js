const app = require("./app");
const http = require("http");
const connectMongo=require("./services/mongo");
const { default: mongoose } = require("mongoose");

const port = process.env.port || 8000;

const server = http.createServer(app);  //Creating the server

async function startServer(){
  await connectMongo();
await mongoose.syncIndexes();
  server.listen(port, function () {
    console.log(`working on ${port}`);
  });

}

const startingServerPromise=startServer(); //assigning starting server function to a constant to pass it to the test file

module.exports=startingServerPromise;