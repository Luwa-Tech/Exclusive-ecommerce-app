import { NavLink } from "react-router-dom"
import signImage from "../assets/signimage.png"
import {UserInputType} from "../types/siginup"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import useAuth from "../hooks/useAuth"

const initUserInputState: UserInputType = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}

const Signup = () => {
    const [userInput, setUserInput] = useState(initUserInputState)
    const [error, setError] = useState<string>("")
    const {setIsUser} = useAuth()
    const navigate = useNavigate()

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            const response = await axios.post("http://localhost:3500/signup", {
                firstname: userInput.firstname,
                lastname: userInput.lastname,
                email: userInput.email,
                password: userInput.password
            })
            console.log(response)
            if (response.status === 202) {
                setIsUser(prev => !prev)
                // Return user to previous location
                console.log("sigined up and logged in")
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
                <h1 className="text-textColor-600 text-[2rem] mb-[.4rem] text-center md:text-left">Create an account</h1>
                <p className="text-[.95rem] text-center md:text-left">Enter your details below</p>
                <form onSubmit={onFormSubmit} className="flex flex-col gap-[1.6rem] mt-[1.7rem]">
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="firstname" type="text" placeholder="John" onChange={onInputChange} required/>
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="lastname" type="text" placeholder="Doe" onChange={onInputChange} required/>
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="email"  type="email" placeholder="test@gmail.com" onChange={onInputChange} required/>
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="password" type="password" onChange={onInputChange} required placeholder="sbobqobfoob2ovbd" />
                    {error && <p className="text-red-700 my-2 underline">{error}</p>}
                    <button className="bg-secondary-700 px-4 py-4 text-white mb-4 hover:bg-opacity-[0.8]" type="submit">Create Account</button>
                </form>
                <p className="text-[.95rem] text-center">Already have account? <NavLink to="/signin" className="underline">Log in</NavLink></p>
            </section>
        </main>
    )
}

export default Signup