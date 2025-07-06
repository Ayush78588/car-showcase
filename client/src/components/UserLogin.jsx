import { Link } from "react-router-dom";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';



function UserLogin() {

    let [emailId, setEmailId] = useState('');
    let [password, setPassword] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/user/login",{
                method:"POST",
                body:JSON.stringify({
                    "emailId": emailId,
                    "password": password
                }),
                headers:{"content-type":"application/json"}
            });
            // console.log(response);
            const data = await response.json();
            console.log(data);
            if(response.ok) {
                // green popup = data.message
                toast.success(data.msg);

            } else {
                // red popup = data.message
                toast.error(data.error)
            }

            // alert(data?.msg || data?.error)
        } catch(e) {
            alert('Internal server error.');
        }
    }

    return (
        <div className="user-form">
            <h1>LOGIN</h1>
            <form onSubmit={handleLogin} >
                <input type="email" name='emailId' required placeholder="EmailId" value={emailId} onChange={(e) => { setEmailId(e.target.value) }} /> <br />
                <input type="password" name="password" required placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br />
                <button>submit</button> <br />
                <Link className="link-in-form" to={'/user/registration'}>Register?</Link> <br />
                <Link className="link-in-form" to={'/'}>Home?</Link>
                <Toaster />
            </form>
        </div>
    )
}

export default UserLogin;