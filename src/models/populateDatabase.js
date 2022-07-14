const {faker}=require("@faker-js/faker");
const Patients=require("./patients");
const connectMongo=require("../services/mongo");

connectMongo();






async function seedDB(){
    let patient;

    for (let i = 0; i < 5; i++) {
        patient={
            dateOfAdmission:faker.date.betweens(new Date("2021-04-18"),new Date("2022-07-10"),1)[0],
            patientName:faker.name.findName(),
            age: Math.floor(Math.random()*60 +10)

        }

        const createdPatient=await Patients.create(patient);
        await createdPatient.save;
        
        
    }
    
}

seedDB();





