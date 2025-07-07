require('dotenv').config();
const connectDB = require('./config/mongoose');
const Car = require("./models/Car");
const mongoose = require('mongoose');


async function seedCars() {
    try {
        await connectDB();
        await Car.deleteMany({});
        console.log('DB cleared');
        await Car.create(
            [
                {
                    name: 'Audi',
                    model: 'A6 Premium Plus',
                    price: '5500000',
                    imgsrc: 'https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    name: 'Toyota',
                    model: 'Camry Hybrid',
                    price: '950000',
                    imgsrc: 'https://i.ytimg.com/vi/zEr-mm8OSGo/sddefault.jpg'
                },
                {
                    name: 'Lamborghini',
                    model: 'Huracán STO',
                    price: '50000000',
                    imgsrc: 'https://images.moneycontrol.com/static-mcnews/2022/06/LamboF.jpg?impolicy=website&width=1600&height=900'
                },
                {
                    name: 'Mercedes-Benz',
                    model: 'C-Class AMG Line',
                    price: '5000000',
                    imgsrc: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww'
                },
                {
                    name: 'BMW',
                    model: 'M5 Competition 2025',
                    price: '9870000',
                    imgsrc: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/M5-2025/11821/1719462197562/front-left-side-47.jpg'
                },
                {
                    name: 'Lamborghini',
                    model: 'Revuelto',
                    price: '86000000',
                    imgsrc: 'https://cimg2.ibsrv.net/ibimg/hgm/1920x1080-1/100/885/lamborghini-revuelto_100885578.jpg'
                },
                {
                    name: 'Hyundai',
                    model: 'Verna SX(O)',
                    price: '750000',
                    imgsrc: 'https://etimg.etb2bimg.com/thumb/msid-107684843,width-1200,height-900,resizemode-4/.jpg'
                },
                {
                    name: 'Porsche',
                    model: '911 Carrera',
                    price: '15500000',
                    imgsrc: 'https://c4.wallpaperflare.com/wallpaper/429/737/124/car-1920x1080-cool-wallpaper-preview.jpg'
                },
                {
                    name: 'Jaguar',
                    model: 'XF R-Dynamic',
                    price: '5870000',
                    imgsrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fpqDesW6xzozQdgX7vLYVInNXkIFuHXbQUlCGOd1LJXEOkO_V3IfqyA4Klt5r6rh_H4&usqp=CAU'
                },
                {
                    name: 'Toyota',
                    model: 'Mirai Concept 2019',
                    price: '5900000',
                    imgsrc: 'https://w0.peakpx.com/wallpaper/64/135/HD-wallpaper-toyota-mirai-concept-2019-cars-luxury-cars-2019-toyota-mirai-japanese-cars-toyota-thumbnail.jpg'
                },
                {
                    name: 'Nissan',
                    model: 'GT-R Premium',
                    price: '6000000',
                    imgsrc: 'https://media.istockphoto.com/id/170450723/photo/a-silver-sports-car-on-black-tile-floor.jpg?s=612x612&w=0&k=20&c=B5BRnhnYzfOf2BE4301r8S7h56GshGUMVAy8QnoKP0Y='
                },
                {
                    "name": "BMW Sedan",
                    "model": "2020",
                    "price": "42000",
                    "imgsrc": "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
                },
                {
                    "name": "Alfa Romeo C4",
                    "model": "2019",
                    "price": "38000",
                    "imgsrc": "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
                },
                {
                    "name": "Mercedes Benz",
                    "model": "2021",
                    "price": "56000",
                    "imgsrc": "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg"
                },
                {
                    "name": "Blue Sedan",
                    "model": "2018",
                    "price": "25000",
                    "imgsrc": "https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg"
                },
                {
                    "name": "Lamborghini Huracan",
                    "model": "2022",
                    "price": "210000",
                    "imgsrc": "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg"
                }
            ]
        );
        console.log('Car data inserted');
    } catch (err) {
        console.log(err.message);
    }
    finally {
        await mongoose.connection.close();
        console.log("DB connection closed");
        process.exit(0);
    }
}

seedCars();