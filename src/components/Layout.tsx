import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import BreadCrumbs from "./BreadCrumbs"

const Layout = () => {
    return (
        <div className="layout">
            <header>
                <NavBar />
                <BreadCrumbs />
            </header>

            <main>  
                <Outlet />
            </main> 

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout

