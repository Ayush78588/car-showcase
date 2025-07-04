require('dotenv').config();
const express = require('express');
const connectDB = require('./config/mongoose');
const Car = require('./models/Car');
const controller = require('./controller');



const app = express();
connectDB();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', function (req, res) {
    res.status(200).send('Welcome to Car Showcase!');
});

app.post('/api/user/registration', controller.handleRegistration);
app.post('/api/user/login', controller.handleLogin);

app.get('/api/car/cardetails', async function (req, res) {
    let carData = await Car.find();
   res.status(200).json(carData);
});

 app.listen(3000, ()=>{
    console.log("Server live on port 3000");
 });


