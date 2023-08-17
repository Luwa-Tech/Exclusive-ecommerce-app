import { NavLink } from "react-router-dom"
import { BsArrowUp } from "react-icons/bs"

export const MobileScroll = () => {
    return (
        <NavLink to="/" onClick={() => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }}>
            <div className="flex justify-center text-[.8rem] items-center w-[100%] bg-secondary-500 py-[.5rem]">
                Back To Top
            </div>
        </NavLink>
    )
}

export const DesktopScroll = () => {
    return (
    <div className="bg-secondary-500 px-[1rem] rounded-[1.6rem] py-[.9rem] absolute right-[60px] top-[-20px] animate-bounce">
    <NavLink title="Back to Top" to="/" onClick={() => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }}>
        <BsArrowUp  className="w-[1.5rem] h-[1.5rem]"/>
    </NavLink>
    </div>
    )
}