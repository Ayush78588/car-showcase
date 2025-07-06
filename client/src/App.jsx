import SearchCarByName from "./components/SearchCarByName";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutUs from './components/AboutUs'
import UserLogin from './components/UserLogin'
import UserRegistration from './components/UserRegistration'
import AddCar from "./components/AddCar";
import HomeLayout from "./layouts/HomeLayout";
import { UserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute"
import { BACKEND_URL } from "./utils/constant";




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [user, setUser] = useState(null);


  async function fetchData() {
    try {
      const res = await fetch(`${BACKEND_URL}/api/auth/user/me`, {
        method: "GET",
        credentials: "include"
      })
      const data = await res.json();

      console.log(data);
      
      if(res.ok) {
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />} >
            <Route path="/" element={<SearchCarByName />} />
            <Route path="/user/car/add" element={<ProtectedRoute><AddCar /></ProtectedRoute>} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Route>
          <Route path="/user/login" element={<PublicRoute><UserLogin /></PublicRoute>} />
          <Route path="/user/registration" element={<PublicRoute><UserRegistration /></PublicRoute>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}


export default App;