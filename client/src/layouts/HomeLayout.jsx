import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"


const HomeLayout = () => {
    return (
        <div id="layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default HomeLayout;