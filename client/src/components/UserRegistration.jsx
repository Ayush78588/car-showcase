import { Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import { BACKEND_URL } from "../utils/constant";

import toast from "react-hot-toast";

function UserRegistration() {


    let [emailId, setEmailId] = useState('');
    let [password, setPassword] = useState('');
    let [fullName, setFullName] = useState('');
    let [mobileNum, setMobileNum] = useState('');
    let [age, setAge] = useState('');
    const navigate = useNavigate();

    async function handleRegistration(e) {
        e.preventDefault();
        try {
            const response = await fetch(`${BACKEND_URL}/api/auth/user/registration`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    emailId,
                    password,
                    age,
                    fullName,
                    mobileNum
                })
            });
            const data = await response.json();
            if (response.ok){
                toast.success(data.msg);
                navigate('/user/login');
            } 
            else{
                toast.error(data.error);
            }
            

        } catch (error) {
            toast.error('Internal server failure');
        }

    }

    return (


        <div className="user-form">
            <h1>REGISTRATION</h1>
            <form onSubmit={handleRegistration}>
                <input type="text" name='fullName' placeholder="Full Name" required value={fullName} onChange={(e) => { setFullName(e.target.value) }} /> <br />
                <input type="email" name='emailId' required placeholder="Email Id" value={emailId} onChange={(e) => { setEmailId(e.target.value) }} /> <br />
                <input type="password" name="password" required placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br />
                <input type="tel" name="mobileNum" placeholder="Mobile Number (10 digits)" pattern="[0-9]{10}" required value={mobileNum} onChange={(e) => { setMobileNum(e.target.value) }} /> <br />
                <input type="number" name="age" placeholder="Age" value={age} onChange={(e) => { setAge(e.target.value) }} /> <br />
                <button>submit</button> <br />
                <Link className="link-in-form" to={'/user/login'}>Login?</Link> <br />
                <Link className="link-in-form" to={'/'}>Home?</Link>

            </form>
        </div>

    )
}

export default UserRegistration;