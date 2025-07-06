import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { BACKEND_URL } from "../utils/constant";

function AddCar() {
    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [picture, setPicture] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('model', model);
        formData.append('price', price);
        formData.append('picture', picture);

       try{
         const response = await fetch(`${BACKEND_URL}/api/car/add`, {
            method: 'POST',
            body: formData,
            credentials: "include"
        });
        const data = await response.json();
        response.ok? toast.success(data.msg) : toast.error(data.error);
       } catch(error){
          return toast.error('Internal server error');
       }
        navigate('/');
    }

    return (
        
        <div className="user-form">
            <h1>Add a New Car</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="text" placeholder="Car Name" value={name} onChange={(e) => setName(e.target.value)} required /><br />

                <input type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} required /><br />

                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required /><br />

                <input type="file" accept="image/*" onChange={(e) => setPicture(e.target.files[0])} required /><br />

                <button type="submit">Add Car</button>
            </form>
            <Toaster/>
        </div>
    );
}

export default AddCar;
