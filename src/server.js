const app = require("./app");
const http = require("http");
const connectMongo=require("./services/mongo");

const port = process.env.port || 8000;

const server = http.createServer(app);

async function startServer(){
  await connectMongo();

  server.listen(port, function () {
    console.log(`working on ${port}`);
  });

}

startServer();

