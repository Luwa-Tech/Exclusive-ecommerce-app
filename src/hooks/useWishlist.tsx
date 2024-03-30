import { useState } from "react"
import { StoreProductType } from "../context/StoreContext"
import axios from "axios"
import { toast } from "react-toastify"

const useWishlist = () => {
    const [wishList, setWishList] = useState<StoreProductType[]>([])

    const getWishlist = async () => {
        try {
            const response = await axios.get("http://localhost:3500/user/wishlist")
            setWishList(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    const addToWishlist = async (id: string) => {
        try {
            const response = await axios.put("http://localhost:3500/user/wishlist/add", {
                productId: id
            })
            if (response.status === 200) {
                toast.success(response.data.message)
            }
        } catch(err) {
            console.log(err)
        }

    }

    const removeFromWishlist = async (id: string) => {
        try {
            const response = await axios.put("http://localhost:3500/user/wishlist/remove", {
                productId: id
            })
            if (response.status === 200) {
                toast.success(response.data.message)
            }
        } catch(err) {
            console.log(err)
        }
    }

    return {
        wishList,
        setWishList,
        getWishlist,
        addToWishlist,
        removeFromWishlist
    }
}

export default useWishlist