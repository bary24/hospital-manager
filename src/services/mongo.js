const mongoose=require("mongoose");
const MONGO_URL="mongodb://localhost:27017/hospital-database";

//Setting up connection to database//
async function connectMongo(){
    try{
        mongoose.connection.once("open",()=>{
            console.log("Mongodb connection is working");
        });
       
    
        await mongoose.connect(MONGO_URL);

    }
    catch{
        mongoose.connection.on("error",(err)=>{    //Handling database connection errors//
            console.log(err); 
        });
    }
    
}




module.exports=connectMongo;