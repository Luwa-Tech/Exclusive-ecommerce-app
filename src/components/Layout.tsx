import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Loading from "./Loading"

import { useAuth0 } from "@auth0/auth0-react"

const Layout = () => {
    const {isLoading} = useAuth0()

    if (isLoading) {
        return (
            <Loading />
        )
    }
    
    return (
        <div className="layout">
            <header>
                <NavBar />
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

