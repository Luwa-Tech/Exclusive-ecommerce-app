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
        <nav className="flex justify-between items-center w-[90%] m-auto max-w-[1200px] pt-[1rem]">
            <section>
                <RxTextAlignLeft className="md:hidden"/>
                <h1 className="text-[1.5rem] font-bold tracking-[0.045rem] text-textColor-600 leading-6">Exclusive</h1>
            </section>
            <section className="flex column md:row gap-[3rem] text-textColor-600 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/about">About</NavLink>
            </section>
            <section className="flex items-center gap-[1.5rem]">
                {isDesktop && <SearchBar/>}
                <div className="flex items-center gap-[0.45rem]">
                    <CiHeart className="w-[1.5rem] h-[1.5rem]"/>
                    <CiShoppingCart className="w-[1.5rem] h-[1.5rem]"/>
                </div>
            </section>
        </nav>
        {isMobile && <SearchBar />}
        </>
    )
}

export default NavBar