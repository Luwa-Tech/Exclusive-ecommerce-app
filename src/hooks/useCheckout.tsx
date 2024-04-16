import {useState} from "react"
import axios from "axios"
import { CartType } from "./useCart"

const useCheckout = () => {
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
    const [checkoutError, setCheckoutError] = useState(null)

    const checkoutHandler = async (cart: CartType | CartType[]) => {
        try {
            setIsCheckoutLoading(true)
            const response = await axios.post("https://exclusive-ecommerce-api.glitch.me/checkout", {
                items: cart
            })
            if (response.data.url) {
                window.location.assign(response.data.url)
            }
        } catch (err) {
            console.log(err) 
            setCheckoutError((err as any))
        } finally {
            setIsCheckoutLoading(false)
        }
    }

    return {
        checkoutHandler,
        isCheckoutLoading,
        checkoutError
    }
}

export default useCheckout