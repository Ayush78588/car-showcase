const Car = require("../models/Car");





async function showCarDetails(req, res) {
    try {
        let carData = await Car.find({});
        res.status(200).json(carData);

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch car details" });

    }
}





async function addCarDetails(req, res) {
    try {
        const { name, model, price } = req.body;

        const imgsrc = `http://localhost:3000/uploads/${req.file.filename}`;


        const newCar = await Car.create({ name, model, price, imgsrc });
        console.log(999);
        res.status(201).json({ msg: "Car added" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to add car" });
    }
}



module.exports= {
    showCarDetails,
    addCarDetails
}