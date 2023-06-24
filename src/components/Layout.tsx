import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = () => {
    return (
        <div className="layout">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout

