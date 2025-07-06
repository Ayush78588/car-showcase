import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Header() {

   const data = useContext(UserContext);


    return <div>
        <nav>
            <div id="logo">LOGO</div>
            <ul>
                <Link className="link" to={"/"}><li>Home</li></Link>
                <Link className="link" to={"/user/car/add"}><li>AddCar</li></Link>
                <Link className="link" to="/AboutUs"><li>AboutUs</li></Link>
                <Link className="link" to={"/user/login"}><li>Login</li></Link>
                <li>Welcome, {data.name}</li>
            </ul>
        </nav>
    </div>
}

export default Header;
