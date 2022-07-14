# hospital-manager

This is the backend skeleton of a hospital management app , I have used Nodejs , expressjs , mongodb .
I have created three APIs , one for the doctors , one for the drugs and one for the patients .
I have followed RESTful architecture in constructing the Apis where they perform the essential CRUD operations 
MVC pattern has been followed to achieve separation of concerns. 

A separate router, model and controller were created for each API.

The models folder contains mongoose models and schemas.
The populateDatabase.js file was used to add Seed data to the database by using fakerjs library

Unit testing was performed using Mocha,supertest and assert module 


Swagger API documentation for each API :
Doctors-API : https://app.swaggerhub.com/apis/bary24/Doctors-API/0.1
Patients API: https://app.swaggerhub.com/apis/bary24/Patients-API/0.1
Drugs API: https://app.swaggerhub.com/apis/bary24/Drugs-API/0.1

