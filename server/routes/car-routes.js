const express =  require('express');
const router = express.Router();

const upload = require("../middlewares/upload");
const carController = require("../controllers/car-controller");
const isUserAuth = require('../middlewares/userAuth');



router.get('/cardetails', carController.showCarDetails);

router.post('/add',isUserAuth, upload.single('picture'), carController.addCarDetails);

module.exports = router;
