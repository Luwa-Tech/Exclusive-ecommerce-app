import { NavLink } from "react-router-dom"
import signImage from "../assets/signimage.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { UserLoginDataType } from "../types/signin";

const initUserInputState: UserLoginDataType = {
    email: "",
    password: ""
}

const Signin = () => {
    const [userInput, setUserInput] = useState(initUserInputState)
    const [error, setError] = useState<string>("")
    const navigate = useNavigate()

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const response = await axios.post("http://localhost:3500/login", {
                email: userInput.email,
                password: userInput.password
            })
    
            console.log(response)
            if (response.status === 202) {
                // Return user to previous location
                //navigate(-1)
                console.log("logged in")
            }

        } catch(err) {
            console.log(err)
            setError(err.response.data.message)
        }

    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        const fieldValue = event.target.value

        setUserInput({...userInput, [fieldName]: fieldValue})
    }
    return (
        <main className="md:flex md:gap-[7rem]">
            <section className="hidden md:block">
                <img src={signImage} alt=""/>
            </section>
            <section className="mt-[6rem] px-[.7rem] md:px-0 md:mt-[7rem]">
                <h1 className="text-textColor-600 text-[2rem] mb-[.4rem] text-center md:text-left">Log in to Exclusive</h1>
                <p className="text-[.95rem] text-center md:text-left">Enter your details below</p>
                <form onSubmit={onFormSubmit} className="flex flex-col gap-[1.6rem] mt-[1.7rem]">
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="email"  type="email" placeholder="test@gmail.com" onChange={onInputChange} />
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="password" type="password" placeholder="1234" onChange={onInputChange}/>
                    {error && <p className="text-red-700 my-2 underline">{error}</p>}
                    <button className="bg-secondary-700 px-4 py-4 text-white mb-4 hover:bg-opacity-[0.8]" type="submit">Log In</button>
                </form>
                <p className="text-[.95rem] text-center">Don't have account? <NavLink to="/signup" className="underline">Sign Up</NavLink></p>
            </section>
        </main>
    )
}

export default Signin