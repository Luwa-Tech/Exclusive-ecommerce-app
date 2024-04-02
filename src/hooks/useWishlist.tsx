import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

type WishListType = {
    id: string,
}

const useWishlist = () => {
    const [wishList, setWishList] = useState<WishListType[]>([])

    const getWishlist = async () => {
        try {
            const response = await axios.get("http://localhost:3500/api/user/wishlist")
            setWishList(response.data)
        } catch(err) {
            console.log(err)
        }
    }

    const addToWishlist = async (id: string) => {
        try {
            const response = await axios.put("http://localhost:3500/api/user/wishlist/add", {
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
            const response = await axios.put("http://localhost:3500/api/user/wishlist/remove", {
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