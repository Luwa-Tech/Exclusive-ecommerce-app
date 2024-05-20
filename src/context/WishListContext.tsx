import { ReactElement, ReactNode, createContext, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useAuth0 } from "@auth0/auth0-react"

type WishlistType = {
    id: string,
}

export type WishlistContextType = {
    wishlist: WishlistType[]
    getWishlist: () => void,
    addToWishlist: (id: string) => void,
    removeFromWishlist: (id: string) => void,

}

type ChildrenType = {
    children: ReactElement | ReactElement[] | ReactNode
}

export const WishlistContext = createContext({} as WishlistContextType)

export const WishlistContextProvider = ({children}: ChildrenType) => {
    const { user, getAccessTokenSilently } = useAuth0()
    const [wishlist, setWishlist] = useState<WishlistType[]>([])

    const getWishlist = async () => {
        try {
            const token = await getAccessTokenSilently()

            const response = await axios.get("http://localhost:3500/api/user/wishlist", {
                params: {
                    email: user?.email
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setWishlist(response.data.items)
        } catch (err) {
            console.log(err)
        }
    }

    const addToWishlist = async (id: string) => {
        try {
            const token = await getAccessTokenSilently()

            const response = await axios.put("http://localhost:3500/api/user/wishlist/add", {
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
        } catch (err) {
            console.log(err)
        }

    }

    const removeFromWishlist = async (id: string) => {
        try {
            const token = await getAccessTokenSilently()

            const response = await axios.put("http://localhost:3500/api/user/wishlist/remove", {
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
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <WishlistContext.Provider value={{
            wishlist,
            getWishlist,
            addToWishlist,
            removeFromWishlist
        }}>
            {children}
        </WishlistContext.Provider>
    )
}