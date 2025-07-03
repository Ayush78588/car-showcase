require('dotenv').config();
const express = require('express');
const connectDB = require('./config/mongoose');
const Car = require('./models/Car');


const app = express();
connectDB();
const PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.status(200).send('Welcome to Car Showcase!');
});

app.get('/api/car/cardetails', async function (req, res) {
    let carData = await Car.find();
   res.status(200).json({
    carData
   });
});

 app.listen(3000, ()=>{
    console.log("Server live on port 3000");
 });


