import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar"
import { HiBars3CenterLeft } from "react-icons/hi2"
import { CiShoppingCart, CiHeart } from "react-icons/ci"
import useRenderHook from "../hooks/useRenderHook"
import SignupButton from "./SignupButton"
import { useAuth0 } from "@auth0/auth0-react"
import { CartType } from "../hooks/api/useCartApi"
import { WishlistType } from "../hooks/api/useWishlistApi"

const RoutesWithoutNavBar = ["/product-form"]

type NavBarType = {
    userCart: CartType[] | undefined,
    wishlist: WishlistType[] | undefined,
    cartQuantity: number | undefined
}

const NavBar = ({ userCart, wishlist, cartQuantity }: NavBarType) => {
    const { pathname } = useLocation()
    const { isAuthenticated } = useAuth0()

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const handleOpenToggle = () => {
        setIsOpen(prev => !prev)
    }

    const handleCloseToggle = () => {
        setIsOpen(prev => !prev)
    }
    const { isDesktop } = useRenderHook()

    const isActiveStyles = {
        textDecoration: "underline",

    }

    if (RoutesWithoutNavBar.some((item) => pathname.includes(item))) {
        return null
    }

    return (
        <nav className="border-b-[.02rem] pb-2 md:pb-0 mb-[.4rem] md:mb-0">
            <div className="flex justify-between items-center md:w-[90%] md:m-auto md:max-w-[1200px] pt-4 px-2 md:pt-[1rem] md:pb-[.5rem]">
                <section className="flex items-center gap-2">
                    <HiBars3CenterLeft className="md:hidden w-[1.6rem] h-[1.6rem]" onClick={handleOpenToggle} />
                    <h1 className="text-[1.3rem] md:text-[1.5rem] font-bold tracking-[0.045rem] text-textColor-600 leading-6">Exclusive</h1>
                </section>
                <section className={`flex flex-col gap-[1rem] column md:flex-row md:gap-[3rem] text-textColor-600 absolute md:static transition-all duration-500 ease-in bg-white left-0 w-full md:w-auto md:z-auto z-[2] px-3 py-10 md:px-0 md:py-0 ${isOpen ? "top-[3rem]" : "top-[-490px]"}`}>
                    <NavLink to="/" className="nav-link" onClick={handleCloseToggle}>Home</NavLink>
                    <NavLink to="/contact" className="nav-link" style={({ isActive }) => isActive ? isActiveStyles : undefined} onClick={handleCloseToggle}>Contact</NavLink>
                    <NavLink to="/about" className="nav-link" style={({ isActive }) => isActive ? isActiveStyles : undefined} onClick={handleCloseToggle}>About</NavLink>
                    {!isAuthenticated && <SignupButton />}
                </section>
                <section className="flex items-center gap-[1.8rem]">
                    {isDesktop && <SearchBar />}
                    <div className="flex items-center gap-[0.8rem]">
                        {isAuthenticated && <NavLink to="/wishlist">
                            <div className="relative">
                                <CiHeart className="nav-icon" />
                                {
                                    (wishlist?.length as number) > 0 && <div className="absolute text-textColor-400 bg-secondary-700 text-[.7rem] md:text-[.9rem] px-[.4rem] md:px-[.5rem] py-[.1rem] rounded-[1.9rem] md:rounded-[1.9rem] top-[-7px] md:top-[-13px] right-[-7px] md:right-[-14px]">{wishlist?.length}</div>
                                }
                            </div>
                        </NavLink>}
                        <NavLink to="/cart">
                            <div className="relative">
                                <CiShoppingCart className="nav-icon" />
                                {
                                    (userCart?.length as number) > 0 && <div className="absolute text-textColor-400 bg-secondary-700 text-[.7rem] md:text-[.9rem] px-[.4rem] md:px-[.5rem] py-[.1rem]  rounded-[1.9rem] md:rounded-[1.9rem] top-[-7px] md:top-[-13px] right-[-7px] md:right-[-14px]">{cartQuantity}</div>
                                }
                            </div>
                        </NavLink>
                    </div>
                </section>
            </div>
        </nav>
    )
}

export default NavBar