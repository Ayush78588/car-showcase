import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import CarCard from "./CarCard";
import { BACKEND_URL } from "../utils/constant";



function SearchCarByName() {
    let [carName, setCarName] = useState('');
    let [filteredCarData, setFilteredCarData] = useState([]);
    let [carData, setCarData] = useState([]);

    function displayCars(input) {
        const filtered = carData.filter((ele, index) => {
            if (input === '') {
                return true;
            }
            return ele.name.toLowerCase().includes(input.toLowerCase());
        });
        setFilteredCarData(filtered);

    }

    function handleChange(e) {
        const input = e.target.value;
        setCarName(input);
        displayCars(input);

    }

    async function fetchCarData() {
        let response = (await (await fetch(`${BACKEND_URL}/api/car/cardetails`)).json());
        console.log(response);
        setFilteredCarData(response);
        setCarData(response);
    }

    useEffect(() => {
        fetchCarData();
    }, []);


    return (
        <div>
            <div id="searchCont">
                <input className="search" type="text" value={carName} onChange={handleChange} placeholder="Search cars by Name" />
            </div>

            {
                carData.length === 0 ? <ShimmerUI /> :
                    (<div id="carcardcont">
                        {
                            filteredCarData.map((car, index) => {
                                return <CarCard name={car.name} price={car.price} model={car.model} key={index} imgsrc={car.imgsrc} />
                            })
                        }
                    </div>)
            }
        </div>
    )
}

export default SearchCarByName;