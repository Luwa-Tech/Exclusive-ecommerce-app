import { Link } from "react-router-dom"
import signImage from "../assets/signimage.png"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"
import { UserLoginDataType } from "../types/signin"
import useAuth from "../hooks/useAuth"

const initUserInputState: UserLoginDataType = {
    email: "",
    password: ""
}

const Signin = () => {
    const [userInput, setUserInput] = useState(initUserInputState)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const {setIsUser} = useAuth()
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            setIsLoading(prev => !prev)
            const response = await axios.post("http://localhost:3500/login", {
                email: userInput.email,
                password: userInput.password
            })
    
            console.log(response)
            if (response.status === 202) {
                setIsUser(prev => !prev)
                // Return user to previous location
                navigate(from, {replace: true})
            }

        } catch(err) {
            setError((err as any).response.data.message)
        } finally {
            setIsLoading(prev => !prev)
        }

    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        const fieldValue = event.target.value

        setUserInput({...userInput, [fieldName]: fieldValue})
    }
    return (
        <main className="md:flex md:gap-[4rem]">
            <section className="hidden md:block md:w-[50%]">
                <img src={signImage} alt=""/>
            </section>
            <section className="mt-[6rem] px-[.7rem] md:px-0 md:mt-[7rem] md:w-[50%]">
                <h1 className="text-textColor-600 text-[2rem] mb-[.4rem] text-center md:text-left md:w-[65%] md:mx-auto">Log in to Exclusive</h1>
                <p className="text-[.95rem] text-center md:text-left md:w-[65%] md:mx-auto">Enter your details below</p>
                <form onSubmit={onFormSubmit} className="flex flex-col gap-[1.6rem] mt-[1.7rem] md:w-[65%] md:mx-auto">
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="email"  type="email" placeholder="test@gmail.com" onChange={onInputChange} />
                    <input className="border-b-[1.5px] pb-1 px-2 outline-none pt-2" name="password" type="password" placeholder="1234" onChange={onInputChange}/>
                    {error && <p className="text-red-700 my-2 underline">{error}</p>}
                    <button disabled={isLoading}  className={`bg-secondary-700 ${isLoading ? "bg-opacity-[0.6]" : "bg-opacity-[1]"} px-4 py-4 text-white mb-4 hover:bg-opacity-[0.8]`} type="submit">{isLoading ? "Please wait..." : "Login"}</button>
                </form>
                <p className="text-[.95rem] text-center md:w-[65%] md:mx-auto">Don't have account? <Link to="/signup" state={from} className="underline">Sign Up</Link></p>
            </section>
        </main>
    )
}

export default Signin