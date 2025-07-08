const Car = require("../models/Car");
const User = require("../models/User");





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
        const imgsrc = `${process.env.BACKEND_URL}/uploads/${req.file.filename}`;

        const newCar = await Car.create({ name, model, price, imgsrc });
        req.user.car.push(newCar._id);
        await req.user.save();

        res.status(201).json({ msg: "Car added" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to add car" });
    }
}



async function displayMyCars(req, res) {
    try {
        const user = await req.user.populate("car", "-__v");
        const car = user.car;
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }

}



async function deleteMyCar(req, res) {
    try {
        const car = await Car.findOneAndDelete({ _id: req.params.id }).select("-__v");
        if (!car) return res.status(400).json({ error: 'Car not found' });

        req.user.car.pull(car._id);
        await req.user.save();

        res.status(200).json({ msg: "Deleted successfully", car });

    } catch (err) {
        console.log(err.message);

        res.status(500).json({ error: "Internal server error" });
    }
}



async function updateMyCar(req, res) {
    try {
        const { name, model, price } = req.body;
        const update = {};
        if (name !== undefined) update.name = name;
        if (model !== undefined) update.model = model;
        if (price !== undefined) update.price = price;
        
        const car = await Car.findOneAndUpdate({ _id: req.params.id }, update, { new: true }).select("-__v");
        if (!car) return res.status(400).json({ error: 'Car not found' });
        res.status(200).json({ msg: "Updated successfully", car });

    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Internal server error" });
    }
}



async function getCarById(req, res) {
    try {

        const car = await Car.findOne({ _id: req.params.id }).select("-__v -_id");
        if (!car) return res.status(400).json({ error: 'Car not found' });

        res.status(200).json({ msg: "Car details sent", car });

    } catch (error) {
        res.status(500).json({ error: "Internal server failure" });
    }
}


module.exports = {
    showCarDetails,
    addCarDetails,
    displayMyCars,
    deleteMyCar,
    updateMyCar,
    getCarById
}