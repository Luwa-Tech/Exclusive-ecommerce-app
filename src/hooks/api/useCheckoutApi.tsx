import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"
import { CartType } from "./useCartApi"

const useCheckoutApi = () => {
    const { user, getAccessTokenSilently } = useAuth0()

    const checkoutHandler = async (cart: CartType[]) => {
        try {
            const token = await getAccessTokenSilently()

            const response = await axios.post(`${import.meta.env.VITE_SERVER_PROD_URL}/api/user/checkout`, {
                items: cart,
                email: user?.email
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