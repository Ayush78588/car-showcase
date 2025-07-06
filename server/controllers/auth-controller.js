const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;




async function handleRegistration(req, res) {
    try {
        let { fullName, age, emailId, password, mobileNum } = req.body;

        let existingUser = await User.findOne({ emailId });
        if (existingUser) {
            return res.status(400).json("Account already exists");
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        await User.create({
            fullName,
            age,
            emailId,
            mobileNum,
            password: hashedPassword
        });

        res.status(201).json("user registered");

    } catch (err) {
        console.log(err.message);
        res.json(err.message);
    }
}

async function handleLogin(req, res) {
    try {
        let { emailId, password } = req.body;

        let existingUser = await User.findOne({ emailId });
        if (!existingUser) {
            return res.status(404).json({ error: "user does not exist" });
        }

        let isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid password" });
        }

        const token = jwt.sign({ emailId }, SECRET_KEY);
        res.cookie(token);
        console.log(token);

        res.json({ msg: "Login Successfull, cookie sent" });
        
    } catch (error) {
        console.log(error.message);
        res.json({ error: error.message });

    }

}



module.exports = {
    handleRegistration,
    handleLogin
}