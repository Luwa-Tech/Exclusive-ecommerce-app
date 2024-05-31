import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"
import { toast } from "react-toastify"

const serverURL = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})

export type CartType = {
    id: string,
    quantity: number,
    stripeID: string
}

// TODO:
// 1. Implement better error handling

const useCartApi = () => {
    const { user, getAccessTokenSilently } = useAuth0()

    const getUserCart = async (): Promise<CartType[]> => {
        const token = await getAccessTokenSilently()

        const response = await serverURL.get("/api/user/cart", {
            params: {
                email: user?.email
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data.items
    }

    const addToCart = async (id: string, stripeId: string) => {
        const token = await getAccessTokenSilently()

        const response = await serverURL.put("/api/user/cart/add", {
            email: user?.email,
            productId: id,
            stripeId: stripeId
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if (response.status === 201) {
            toast.success("Product added to cart")
        }
    }

    const increaseItemQty = async (id: string) => {
        const token = await getAccessTokenSilently()

        const response = await serverURL.put("/api/user/cart/increase-item-qty", {
            productId: id,
            email: user?.email
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        toast.info(response.data.message)
    }

    const decreaseItemQty = async (id: string) => {
        const token = await getAccessTokenSilently()

        const response = await serverURL.put("/api/user/cart/decrease-item-qty", {
            productId: id,
            email: user?.email
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        toast.info(response.data.message)
    }

    const removeFromCart = async (id: string) => {
        const token = await getAccessTokenSilently()

        const response = await serverURL.put("/api/user/cart/remove", {
            productId: id,
            email: user?.email
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        toast.success(response.data.message)
    }

    // const cartQuantity = userCart.reduce((qty, item) => item.quantity + qty, 0)

    // const getItemQuantity = (id: string) => {
    //     return userCart.find(item => item.id === id)?.quantity || 0
    // }

    return {
        getUserCart,
        addToCart,
        increaseItemQty,
        decreaseItemQty,
        removeFromCart
    }
}


export default useCartApi