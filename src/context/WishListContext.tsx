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
    isUserWishlistLoading: boolean,
    isUserWishlistError: null,
    isAddToWishlistLoading: boolean,
    isAddToWishlistError: null,
    isRemoveFromWishlistLoading: boolean,
    isRemoveFromWishlistError: null
}

type ChildrenType = {
    children: ReactElement | ReactElement[] | ReactNode
}

export const WishlistContext = createContext({} as WishlistContextType)

export const WishlistContextProvider = ({children}: ChildrenType) => {
    const { user, getAccessTokenSilently } = useAuth0()
    const [wishlist, setWishlist] = useState<WishlistType[]>([])

    const [isUserWishlistLoading, setIsUserWishlistLoading] = useState<boolean>(false)
    const [isUserWishlistError, setIsUserWishlistError] = useState(null)

    const [isAddToWishlistLoading, setIsAddToWishlistLoading] = useState<boolean>(false)
    const [isAddToWishlistError, setIsAddToWishlistError] = useState(null)

    const [isRemoveFromWishlistLoading, setIsRemoveFromWishlistLoading] = useState<boolean>(false)
    const [isRemoveFromWishlistError, setIsRemoveFromWishlistError] = useState(null)

    const getWishlist = async () => {
        try {
            setIsUserWishlistLoading(true)
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
            setIsUserWishlistError((err as null))
        } finally {
            setIsUserWishlistLoading(false)
        }
    }

    const addToWishlist = async (id: string) => {
        try {
            setIsAddToWishlistLoading(true)
            const token = await getAccessTokenSilently()

            const response = await axios.put("http://localhost:3500/api/user/wishlist/add", {
                productId: id,
                email: user?.email
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // Refetch user wishlist
            await getWishlist()
            if (response.status === 200) {
                toast.success(response.data.message)
            }
        } catch (err) {
            setIsAddToWishlistError((err as null))
        } finally {
            setIsAddToWishlistLoading(false)
        }

    }

    const removeFromWishlist = async (id: string) => {
        try {
            setIsRemoveFromWishlistLoading(true)
            const token = await getAccessTokenSilently()

            const response = await axios.put("http://localhost:3500/api/user/wishlist/remove", {
                productId: id,
                email: user?.email
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            await getWishlist()
            if (response.status === 200) {
                toast.success(response.data.message)
            }
        } catch (err) {
            setIsRemoveFromWishlistError((err as null))
        } finally {
            setIsRemoveFromWishlistLoading(false)
        }
    }

    return (
        <WishlistContext.Provider value={{
            wishlist,
            getWishlist,
            addToWishlist,
            removeFromWishlist,
            isUserWishlistLoading,
            isUserWishlistError,
            isAddToWishlistLoading,
            isAddToWishlistError,
            isRemoveFromWishlistLoading,
            isRemoveFromWishlistError
        }}>
            {children}
        </WishlistContext.Provider>
    )
}