import SearchCarByName from "./components/SearchCarByName";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AboutUs from './components/AboutUs'
import UserLogin from './components/UserLogin'
import UserRegistration from './components/UserRegistration'
import AddCar from "./components/AddCar";
import HomeLayout from "./layouts/HomeLayout";




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} >
          <Route path="/" element={<SearchCarByName />} />
          <Route path="/user/car/add" element={<AddCar />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Route>
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/registration" element={<UserRegistration />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;