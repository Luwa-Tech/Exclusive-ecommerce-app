import {useState} from "react"
import axios from "axios"
import { CartType } from "./useCart"

const useCheckout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const checkoutHandler = async (cart: CartType | CartType[]) => {
        try {
            setIsLoading(true)
            const response = await axios.post("https://exclusive-ecommerce-api.glitch.me/checkout", {
                items: cart
            })
            if (response.data.url) {
                window.location.assign(response.data.url)
            }
        } catch (err) {
            console.log(err) 
            setError((err as any))
        } finally {
            setIsLoading(false)
        }
    }

    return {
        checkoutHandler,
        isLoading,
        error
    }
}

export default useCheckout