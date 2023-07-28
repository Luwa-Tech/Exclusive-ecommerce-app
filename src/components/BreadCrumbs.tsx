import { useLocation } from "react-router"
import { NavLink } from "react-router-dom"

const BreadCrumbs = () => {
    const location  = useLocation()

    let currentLink = ''   

    //get the pathname from location and split it into
    //an array of strings
    const crumbs = location.pathname.split('/')
    //filter any empty string
    .filter(crumb => crumb !== '')
    //map and concatenate each pathname and save to currentLink variable
    .map(crumb => {
        currentLink += `/${crumb}`

        //return a navLink for each iteration
        return (
            <div className="crumb">
                <NavLink className={({isActive}) => isActive ? "isActiveStyles" : "notActiveStyles" } title={crumb}  to={currentLink}>{crumb}</NavLink>
            </div>
        )
    })
    return (
        <div className="breadcrumbs ml-4 mt-4 md:mt-[1.3rem] md:ml-[5.5rem]">
            {crumbs}
        </div>
    )
}

export default BreadCrumbs