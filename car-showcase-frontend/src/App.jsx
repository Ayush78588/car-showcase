
import CarCard from "./components/CarCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useState, useEffect } from "react";




function App() {

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
    let response = await (await fetch("http://localhost:3000/api/car/cardetails")).json();
    console.log(response);
    setFilteredCarData(response);
    setCarData(response);
  }

  useEffect(() => {
    fetchCarData();
  }, []);

  
  return <>
    <Header />

    <div id="searchCont">
      <input className="search" type="text" value={carName} onChange={handleChange} placeholder="Search cars by Name" />
    </div>

    {
      carData.length === 0 ? <p className="loading">Loading........</p> :
        (<div id="carcardcont">
          {
            filteredCarData.map((car, index) => {
              return <CarCard name={car.name} price={car.price} model={car.model} key={index} imgsrc={car.imgsrc} />
            })
          }
        </div>)
    }

    <Footer />
  </>
}

export default App;