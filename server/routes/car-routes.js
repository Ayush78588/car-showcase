const express =  require('express');
const router = express.Router();

const upload = require("../middleware/upload");
const carController = require("../controllers/car-controller");



router.get('/cardetails', carController.showCarDetails);

router.post('/add', upload.single('picture'), carController.addCarDetails);

module.exports = router;
