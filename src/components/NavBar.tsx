import {NavLink} from "react-router-dom"
import SearchBar from "./SearchBar"
import {RxTextAlignLeft } from "react-icons/rx"
import { CiShoppingCart, CiHeart} from "react-icons/ci"
import { useMediaQuery } from "react-responsive"



const NavBar = () => {
    const isMobile = useMediaQuery({ maxWidth: 639 })
    const isDesktop = useMediaQuery({ minWidth: 640 })
    return (
        <>
        <nav className="flex justify-between items-center md:w-[90%] md:m-auto md:max-w-[1200px] pt-2 px-2 md:pt-[1rem]">
            <section className="flex items-center gap-2">
                <RxTextAlignLeft className="md:hidden w-[1.6rem] h-[1.6rem]"/>
                <h1 className="text-[1.5rem] font-bold tracking-[0.045rem] text-textColor-600 leading-6">Exclusive</h1>
            </section>
            <section className="hidden md:flex md:column md:row md:gap-[3rem] text-textColor-600 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
            </section>
            <section className="flex items-center gap-[1.5rem]">
                {isDesktop && <SearchBar/>}
                <div className="flex items-center gap-[0.45rem]">
                    <CiHeart className="w-[1.5rem] h-[1.5rem] text-buttonColor-400"/>
                    <CiShoppingCart className="w-[1.5rem] h-[1.5rem] text-buttonColor-400"/>
                </div>
            </section>
        </nav>
        {isMobile && <SearchBar />}
        </>
    )
}

export default NavBar