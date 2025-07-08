import { useContext } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { BACKEND_URL } from "../utils/constant";

function Header() {

    const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();


    async function handleLogout() {
        try {
            const response = await fetch(`${BACKEND_URL}/api/auth/user/logout`, {
                method: "GET",
                credentials: "include"
            });
            console.log('Response came.....');

            const data = await response.json();
            if (response.ok) {
                console.log('Running response.ok segment');
                toast.success(data.msg);
                setUser(null);
                setIsAuthenticated(false);
                navigate('/');
               
            } else {
                toast.error(data?.error || 'Something went wrong.');
            }

        } catch (error) {
            toast.error("Internal server error");
        }
    }



    return <div>
        <nav>
            <div id="logo">LOGO</div>
            <ul>
                <Link className="link" to={"/"}><li>Home</li></Link>
                <Link className="link" to="/user/car/add"><li>AddCar</li></Link>
                {
                    isAuthenticated ?
                        <Link className="link" to="/user/car/mycars"><li>MyCars</li></Link> : null
                }

                <Link className="link" to="/AboutUs"><li>AboutUs</li></Link>

                {
                    isAuthenticated ?
                        (<button id="logout-btn" onClick={handleLogout}>Logout</button>)
                        :
                        (<Link className="link" to={"/user/login"}><li>Login</li></Link>)
                }
                {
                    isAuthenticated && <li>Welcome, {user.fullName}</li>
                }
            </ul>
        </nav>
        <Toaster />
    </div>
}

export default Header;
