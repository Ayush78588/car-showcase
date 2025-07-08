import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import CarCard from "./CarCard";
import { BACKEND_URL } from "../utils/constant";
import toast from 'react-hot-toast';



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
        try {
            let response = await fetch(`${BACKEND_URL}/api/car/cardetails`);
            let data = await response.json();
            if(response.ok){
                setFilteredCarData(data);
                setCarData(data,1 );
            } else{
                toast.error(data.error);
            }
        } catch(error){
            toast.error("Internal server error");
        }
    }

    useEffect(() => {
        fetchCarData();
    }, []);


    return (
        <div>
            <div className="cars-cont">
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