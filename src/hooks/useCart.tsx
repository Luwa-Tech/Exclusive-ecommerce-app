import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

type CartType = {
    id: string,
    quantity: number
}

const useCart = () => {
    const [userCart, setUserCart] = useState<CartType[]>([])

    const getUserCart = async () => {
        try {
            const response = await axios.get("http://localhost:3500/api/user/cart")
            setUserCart(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    const addToCart = async (id: string) => {
        try {
            const response = await axios.put("http://localhost:3500/api/user/cart/add", {
                productId: id
            })
            
            if (response.status === 201) {
                toast.success("Product added to cart")
            } else {
                toast.success("Product quantity updated")
            }
            
        } catch (err) {
            console.log(err)
        }
    }

    const decreaseItemQty = async (id: string) => {
        try {
            const response = await axios.put("http://localhost:3500/api/user/cart/decrease-item-qty", {
                productId: id
            })
            toast.info(response.data.message)
        } catch (err) {
            console.log(err)
        }
    }

    const removeFromCart = async (id: string) => {
        try {
            const response = await axios.put("http://localhost:3500/api/user/cart/remove", {
                productId: id
            })
            toast.success(response.data.message)
        } catch (err) {
            console.log(err)
        }
    }

    const cartQuantity = userCart.reduce(
        (qty, item) => item.quantity + qty,
        0
    )

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
        getItemQuantity
    }
}

export default useCart