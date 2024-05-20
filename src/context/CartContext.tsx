import { 
    ReactElement,
    ReactNode,
    createContext,
    useState,   
} from "react"
import axios from "axios"
import { useAuth0 } from "@auth0/auth0-react"
import { toast } from "react-toastify"


export type CartType = {
    id: string,
    quantity: number,
    stripeID: string
}

type ChildrenType = {
    children: ReactElement | ReactElement[] | ReactNode
}

export type CartContextType = {
    getUserCart: () => void,
    userCart: CartType[],
    addToCart: (id: string, stripeID: string) => void,
    decreaseItemQty: (id: string) => void,
    removeFromCart: (id: string) => void,
    cartQuantity: number,
    getItemQuantity: (id: string) => number,
    isLoading: boolean,
    error: null
}

export const CartContext = createContext({} as CartContextType)


export const CartContextProvider = ({children}: ChildrenType) => {
    const { user, getAccessTokenSilently } = useAuth0()

    const [userCart, setUserCart] = useState<CartType[]>([])

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState(null)

    const getUserCart = async () => {
        try {
            setIsLoading(true)

            const token = await getAccessTokenSilently()
            console.log(token)

            const response = await axios.get("http://localhost:3500/api/user/cart",  {
                params: {
                    email: user?.email
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setUserCart(response.data.items)
            console.log(userCart)
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

            const token = await getAccessTokenSilently()

            const response = await axios.put("http://localhost:3500/api/user/cart/add", {
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

            const token = await getAccessTokenSilently()

            const response = await axios.put("http://localhost:3500/api/user/cart/decrease-item-qty", {
                productId: id,
                email: user?.email
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
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

            const token = await getAccessTokenSilently()

            const response = await axios.put("http://localhost:3500/api/user/cart/remove", {
                productId: id,
                email: user?.email
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(response.data.message)

        } catch (err) {
            setError((err as null))

        } finally {
            setIsLoading(false)
        }
    }

    const cartQuantity = userCart.reduce((qty, item) => item.quantity + qty, 0)

    const getItemQuantity = (id: string) => {
        return userCart.find(item => item.id === id)?.quantity || 0
    }

    return (
        <CartContext.Provider value={{
            getUserCart,
            userCart,
            addToCart,
            decreaseItemQty,
            removeFromCart,
            cartQuantity,
            getItemQuantity,
            isLoading,
            error
        }}>
            {children}
        </CartContext.Provider>
    
    )

}