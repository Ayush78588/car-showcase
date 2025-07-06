require('dotenv').config();
const express = require('express');
const connectDB = require('./config/mongoose');
const cors = require('cors');
const carRoutes = require('./routes/car-routes');
const authRoutes = require("./routes/auth-routes");
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000;



const app = express();
connectDB();


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use('/uploads', express.static('uploads'));
console.log(process.env.FRONTEND_URL);




app.use("/api/car", carRoutes);
app.use("/api/auth", authRoutes);



app.get('/', function (req, res) {
    res.status(200).send('Welcome to Car Showcase!');
});



app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});



 app.listen(3000, ()=>{
    console.log(`Server live on port ${PORT}`);
 });


