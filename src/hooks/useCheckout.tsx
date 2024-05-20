import { useState } from "react"
import axios from "axios"
import { CartType } from "./useCart"
import { useAuth0 } from "@auth0/auth0-react"

const useCheckout = () => {
    const { getAccessTokenSilently } = useAuth0()
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false)
    const [checkoutError, setCheckoutError] = useState(null)

    const checkoutHandler = async (cart: CartType | CartType[]) => {
        try {
            setIsCheckoutLoading(true)

            const token = await getAccessTokenSilently()

            const response = await axios.post("https://exclusive-ecommerce-api.glitch.me/checkout", {
                items: cart
            }, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
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