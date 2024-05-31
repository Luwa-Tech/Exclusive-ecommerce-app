import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"
import { CartType } from "./useCartApi"

const useCheckoutApi = () => {
    const { getAccessTokenSilently } = useAuth0()

    const checkoutHandler = async (cart: CartType[]) => {
        try {
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
        } catch {
            throw Error("Could not process payment.. try again later")
        } 
    } 

    return {
        checkoutHandler
    }
}

export default useCheckoutApi