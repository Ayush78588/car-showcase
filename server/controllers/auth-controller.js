const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY;



async function handleRegistration(req, res) {
    try {
        let { fullName, age, emailId, password, mobileNum } = req.body;

        let existingUser = await User.findOne({ emailId });
        if (existingUser) {
            return res.status(400).json({error: "Account already exists"});
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

        res.status(201).json({msg: "user registered"});

    } catch (err) {
        console.log(err.message);
        res.status(500).json({error: "Internal server failure"});
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
        res.cookie('accessToken', token, {
            httpOnly: true,
            sameSite: 'none',
            secure: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        });

        res.json({ msg: "Login Successfull", user: {fullName: existingUser.fullName, emailId: existingUser.emailId} });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal server failure" });

    }

}



function handleLogout(req, res) {

    res.clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'none'
    });
    console.log('Cookie cleared');


    res.status(200).json({ msg: 'LoggedOut Successfully' });
}



function handleMeReq(req, res) {
    console.log(req.user);

    res.status(200).json({ user: req.user });
}



module.exports = {
    handleRegistration,
    handleLogin,
    handleLogout,
    handleMeReq
}