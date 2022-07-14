const mongoose=require("mongoose");
const MONGO_URL="mongodb://localhost:27017/hospital-database";

async function connectMongo(){
    try{
        mongoose.connection.once("open",()=>{
            console.log("Mongodb connection is working");
        });
       
    
        await mongoose.connect(MONGO_URL);

    }
    catch{
        mongoose.connection.on("error",(err)=>{
            console.log(err); 
        });
    }
    
}

// async function closeMongo(){
//     mongoose.connection.close;
// }


module.exports=connectMongo;