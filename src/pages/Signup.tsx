import { NavLink } from "react-router-dom"
import signImage from "../assets/signimage.png"

const Signup = () => {
    return (
        <main className="md:flex md:gap-[7rem]">
            <section className="hidden md:block">
                <img src={signImage} alt=""/>
            </section>
            <section className="mt-[6rem] px-[.7rem] md:px-0 md:mt-[7rem]">
                <h1 className="text-textColor-600 text-[2rem] mb-[.4rem] text-center md:text-left">Create an account</h1>
                <p className="text-[.95rem] text-center md:text-left">Enter your details below</p>
                <form className="flex flex-col gap-[1.6rem] mt-[1.7rem]">
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" type="text" placeholder="John Doe.." />
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2"  type="email" placeholder="test@gmail.com.." />
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" type="password" placeholder="1234" />
                    <button className="bg-secondary-700 px-4 py-4 text-white mb-4 hover:bg-opacity-[0.8]" type="submit">Create Account</button>
                </form>
                <p className="text-[.95rem] text-center">Already have account? <NavLink to="/signin" className="underline">Log in</NavLink></p>
            </section>
        </main>
    )
}

export default Signup