import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import useAuth from "./useAuth"

export type CartType = {
    id: string,
    quantity: number,
    stripeID: string
}

const useCart = () => {
    const [userCart, setUserCart] = useState<CartType[]>([])
    const { setAuth } = useAuth()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState(null)

    const getUserCart = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get("http://localhost:3500/api/user/cart")
            setUserCart(response.data)
        } catch (err) {
            console.log(err)
            setError((err as null))
        } finally {
            setIsLoading(false)
        }
    }

    const addToCart = async (id: string, stripeId: string) => {
        try {
            setIsLoading(true)
            const response = await axios.put("http://localhost:3500/api/user/cart/add", {
                productId: id,
                stripeId: stripeId
            })

            if (response.status === 201) {
                toast.success("Product added to cart")
            } else {
                toast.success("Product quantity updated")
            }

        } catch (err) {
            console.log(err)
            setError((err as null))
        } finally {
            setIsLoading(false)
        }
    }

    const decreaseItemQty = async (id: string) => {
        try {
            setIsLoading(true)
            const response = await axios.put("http://localhost:3500/api/user/cart/decrease-item-qty", {
                productId: id
            })
            toast.info(response.data.message)
        } catch (err) {
            console.log(err)
            setError((err as null))
        } finally {
            setIsLoading(false)
        }
    }

    const removeFromCart = async (id: string) => {
        try {
            setIsLoading(true)
            const response = await axios.put("http://localhost:3500/api/user/cart/remove", {
                productId: id
            })
            toast.success(response.data.message)
        } catch (err) {
            console.log(err)
            setError((err as null))
        } finally {
            setIsLoading(false)
        }
    }

    const cartQuantity = userCart.reduce((qty, item) => item.quantity + qty, 0)

    const getItemQuantity = (id: string) => {
        return userCart.find(item => item.id === id)?.quantity || 0
    }

    return {
        getUserCart,
        userCart,
        addToCart,
        decreaseItemQty,
        removeFromCart,
        cartQuantity,
        getItemQuantity,
        isLoading,
        error
    }
}

export default useCart