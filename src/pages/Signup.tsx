import { NavLink } from "react-router-dom"
import signImage from "../assets/signimage.png"
import { UserInputType } from "../types/siginup"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
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
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const { setIsUser } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const { from } = location.state || { from: { pathname: "/" } }

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            setIsLoading(prev => !prev)
            const response = await axios.post("http://localhost:3500/signup", {
                firstname: userInput.firstname,
                lastname: userInput.lastname,
                email: userInput.email,
                password: userInput.password
            })
            console.log(response)
            if (response.status === 201) {
                setIsUser(prev => !prev)
                // Return user to previous location
                navigate(from, { replace: true })
            }

        } catch (err) {
            setError((err as any).response.data.message)
        } finally {
            setIsLoading(prev => !prev)
        }
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        const fieldValue = event.target.value

        setUserInput({ ...userInput, [fieldName]: fieldValue })
    }
    return (
        <main className="md:flex md:gap-[4rem]">
            <section className="hidden md:block md:w-[50%]">
                <img src={signImage} alt="" />
            </section>
            <section className="mt-[6rem] px-[.7rem] md:px-0 md:mt-[4.5rem] md:w-[50%]">
                <h1 className="text-textColor-600 text-[2rem] mb-[.4rem] text-center md:text-left md:w-[65%] md:mx-auto">Create an account</h1>
                <p className="text-[.95rem] text-center md:text-left md:w-[65%] md:mx-auto">Enter your details below</p>
                <form onSubmit={onFormSubmit} className="flex flex-col gap-[1.6rem] md:w-[65%] md:mx-auto mt-[1.7rem]">
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="firstname" type="text" placeholder="John" onChange={onInputChange} required />
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="lastname" type="text" placeholder="Doe" onChange={onInputChange} required />
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="email" type="email" placeholder="test@gmail.com" onChange={onInputChange} required />
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="password" type="password" onChange={onInputChange} required placeholder="1234" />
                    {error && <p className="text-red-700 my-2 underline">{error}</p>}
                    <button disabled={isLoading} className={`bg-secondary-700 ${isLoading ? "bg-opacity-[0.6]" : "bg-opacity-[1]"} px-4 py-4 text-white mb-4 hover:bg-opacity-[0.8]`} type="submit">{isLoading ? "Creating account..." : "Create account"}</button>
                </form>
                <p className="text-[.95rem] md:w-[65%] md:mx-auto text-center">Already have account? <NavLink to="/signin" className="underline">Log in</NavLink></p>
            </section>
        </main>
    )
}

export default Signup