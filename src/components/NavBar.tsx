import React from "react"
import {NavLink} from "react-router-dom"
import SearchBar from "./SearchBar"
import {HiBars3CenterLeft } from "react-icons/hi2"
import { CiShoppingCart, CiHeart} from "react-icons/ci"
import { useMedia } from "../hooks/UseMedia"
import Categories from "./Categories"



const NavBar = () => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const handleToggle = () => {
        setIsOpen(prev => !prev)
    }
    const {isMobile, isDesktop} = useMedia()
    return (
        <nav>
            <div className="flex justify-between items-center md:w-[90%] md:m-auto md:max-w-[1200px] pt-2 px-2 md:pt-[1rem] md:pb-[.5rem] border-b-secondary-500 md:border-b-[1.95px]">
                <section className="flex items-center gap-2">
                    <HiBars3CenterLeft className="md:hidden w-[1.6rem] h-[1.6rem]" onClick={handleToggle}/>
                    <h1 className="text-[1.3rem] md:text-[1.5rem] font-bold tracking-[0.045rem] text-textColor-600 leading-6">Exclusive</h1>
                </section>
                <section className={`flex flex-col gap-[1rem] column md:flex-row md:gap-[3rem] text-textColor-600 absolute md:static transition-all duration-500 ease-in bg-white left-0 w-full md:w-auto md:z-auto z-[2] px-3 py-10 md:px-0 md:py-0 ${isOpen ? "top-[3rem]" : "top-[-490px]"}`}>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    {isMobile && <Categories />}
                </section>
                <section className="flex items-center gap-[1.5rem]">
                    {isDesktop && <SearchBar/>}
                    <div className="flex items-center gap-[0.45rem]">
                        <CiHeart className="nav-icon"/>
                        <CiShoppingCart className="nav-icon"/>
                    </div>
                </section>
            </div>
            {isMobile && <SearchBar />}
        </nav>
    )
}

export default NavBar