import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"
import { toast } from "react-toastify"

export type WishlistType = {
    id: string,
}

const serverURL = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})

const useWishlistApi = () => {
    const { user, getAccessTokenSilently } = useAuth0()

    const getWishlist = async (): Promise<WishlistType[]> => {
        const token = await getAccessTokenSilently()

        const response = await serverURL.get("/api/user/wishlist", {
            params: {
                email: user?.email
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        console.log(response.data)
        return response.data.items
    }

    const addToWishlist = async (id: string) => {
        const token = await getAccessTokenSilently()

        const response = await serverURL.put("/api/user/wishlist/add", {
            productId: id,
            email: user?.email
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (response.status === 200) {
            toast.success(response.data.message)
        }
    }

    const removeFromWishlist = async (id: string) => {
        const token = await getAccessTokenSilently()

        const response = await serverURL.put("/api/user/wishlist/remove", {
            productId: id,
            email: user?.email
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (response.status === 200) {
            toast.success(response.data.message)
        }
    }
    
    return {
        getWishlist,
        addToWishlist,
        removeFromWishlist
    }
}

export default useWishlistApi