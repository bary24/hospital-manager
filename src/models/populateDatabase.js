// const {faker}=require("@faker-js/faker");
const Drugs=require("./drugs");
const connectMongo=require("../services/mongo");

connectMongo();






async function seedDB(){
    const drugs=["Augmentin","Cataflam","Catafast","Flagyl","Aspirin","Bruffen"]
    const numbers=[];
    let number;

for (let i = 0; i < 5; i++) {
   number=Math.floor(Math.random()*6);
   if(numbers.includes(number)){
    i--
    continue;
   }
   numbers.push(number);
    const drug={
        tradeName:drugs[number],
        dosagePerDay:Math.floor(Math.random()*5+1),
        price:Math.floor(Math.random()*100)+" egp"
    }
     const createdDrug= await Drugs.create(drug);
    await createdDrug.save();
    console.log(createdDrug);
 
    
}
    
    
}

seedDB();





