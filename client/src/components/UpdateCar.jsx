import { useEffect, useState } from "react";
import { BACKEND_URL } from "../utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function UpdateCar() {

    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();
    

    async function fetchCarData() {
        try {
            const response = await fetch(`${BACKEND_URL}/api/car/${id} `);
            const data = await response.json();
 
            if (!response.ok) return toast.error(data.error);
            setName(data.car.name);
            setModel(data.car.model);
            setPrice(data.car.price);
        } catch(error){
            toast.error("Internal server error");
        }

    }


    async function updateCarData(event){
        try{
            event.preventDefault();
            const response = await fetch(`${BACKEND_URL}/api/car/${id}/update`, {
            credentials: "include",
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                name, model, price
            })
        });

        const data = await response.json();
        if(!response.ok) return toast.error(data.error);
        setName(data.car.name);
        setPrice(data.car.price);
        setModel(data.car.model);
        toast.success(data.msg);
        navigate('/user/car/mycars');
        } catch(error){
            toast.error(error.message);
        }

    }



    useEffect(() => {
        fetchCarData();
    }, []);

    return (
        <div className="user-form">
            <h1>Update car </h1>
            <form onSubmit={updateCarData}>
                <label className="label">Car Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br />
                <label className="label">Car Model:</label>
                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required /><br />
                <label className="label">Car Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required /><br />

                <button type="submit">Update</button>
            </form>

        </div>

    )
}

export default UpdateCar;