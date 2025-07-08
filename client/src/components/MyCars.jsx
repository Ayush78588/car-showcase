import { useEffect, useState } from "react";
import { BACKEND_URL } from "../utils/constant";
import toast from "react-hot-toast";
import CarCard from "./CarCard";
import { Link } from "react-router-dom";





function MyCars() {

    let [carList, setCarList] = useState([]);
    let [loading, setLoading] = useState(true);


    async function fetchMyCars() {
        try {
            const response = await fetch(`${BACKEND_URL}/api/car/mycars`, {
                credentials: "include",
                method: "GET"
            });
            const data = await response.json();
            if (!response.ok) return toast.error(data.error);
            setCarList(data);
            setLoading(false);

        } catch (error) {
            console.log(error.message);

            toast.error('iiInternal server failure');
        }

    }

    async function deleteCar(id) {
        try {
            const response = await fetch(`${BACKEND_URL}/api/car/${id}/delete`, {
                method: "DELETE",
                credentials: "include"
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.msg);
                setCarList(carList.filter((ele) => {
                    return ele._id !== id
                }));
            }
            else toast.error(data.error);

        } catch (error) {
            toast.error("Internall server failure");
        }

    }



    useEffect(() => {
        fetchMyCars();
    }, []);

    return (

        <div className="cars-cont">
            {
                loading ?
                    <p><strong>Loading Your Cars.............</strong></p>
                    :
                    carList.length ?
                        carList.map((ele, i) => {
                            return <div key={i}>
                                <CarCard name={ele.name} model={ele.model} price={ele.price} imgsrc={ele.imgsrc} />
                                <div id="mycar-btn">
                                    <button onClick={() => { deleteCar(ele._id) }}>delete</button>
                                    <Link to={`/user/car/${ele._id}/edit`}><button>edit</button> </Link>
                                </div>
                            </div>
                        })
                        :
                        <div>
                            <p>No cars found in your list.</p>  <br />
                            <Link to="/user/car/add"><p><strong>Add Car</strong></p></Link>
                        </div>
            }

        </div>


    )
}

export default MyCars;