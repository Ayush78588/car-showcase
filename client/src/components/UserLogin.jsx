import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from "../contexts/UserContext";
import { BACKEND_URL } from "../utils/constant";


function UserLogin() {

    let [emailId, setEmailId] = useState('');
    let [password, setPassword] = useState('');
    const navigate = useNavigate();

    const {setUser, setIsAuthenticated} = useContext(UserContext);

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await fetch(`${BACKEND_URL}/api/auth/user/login`,{
                method:"POST",
                body:JSON.stringify({
                    "emailId": emailId,
                    "password": password
                }),
                headers:{"content-type":"application/json"},
                credentials: "include"
            });
            // console.log(response);
            const data = await response.json();
            console.log(data);
            if(response.ok) {
                toast.success(data.msg);
                setUser(data.user);
                setIsAuthenticated(true);

                navigate('/');
            } else {
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