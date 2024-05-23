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
    increaseItemQty: (id: string) => void,
    decreaseItemQty: (id: string) => void,
    removeFromCart: (id: string) => void,
    cartQuantity: number,
    getItemQuantity: (id: string) => number,
    isUserCartLoading: boolean,
    isUserCartError: null,
    isAddToCartLoading: boolean,
    isAddToCartError: null,
    isRemoveFromCartLoading: boolean,
    isRemoveFromCartError: null,
    isIncreaseItmQtyLoading: boolean,
    isIncreaseItmQtyError: null
    isDecreaseItmQtyLoading: boolean,
    isDecreaseItmQtyError: null
}

export const CartContext = createContext({} as CartContextType)


export const CartContextProvider = ({children}: ChildrenType) => {
    const { user, getAccessTokenSilently } = useAuth0()

    const [userCart, setUserCart] = useState<CartType[]>([])

    // Refactor
    const [isUserCartLoading, setIsUserCartLoading] = useState<boolean>(false)
    const [isUserCartError, setIsUserCartError] = useState(null)

    const [isAddToCartLoading, setIsAddToCartLoading] = useState<boolean>(false)
    const [isAddToCartError, setIsAddToCartError] = useState(null)

    const [isRemoveFromCartLoading, setIsRemoveFromCartLoading] = useState<boolean>(false)
    const [isRemoveFromCartError, setIsRemoveFromCartError] = useState(null)

    const [isIncreaseItmQtyLoading, setIsIncreaseItmQtyLoading] = useState<boolean>(false)
    const [isIncreaseItmQtyError, setIsIncreaseItmQtyError] = useState(null)

    const [isDecreaseItmQtyLoading, setIsDecreaseItmQtyLoading] = useState<boolean>(false)
    const [isDecreaseItmQtyError, setIsDecreaseItmQtyError] = useState(null)
    

    const getUserCart = async () => {
        try {
            setIsUserCartLoading(true)

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
            setIsUserCartError((err as null))
        } finally {
            setIsUserCartLoading(false)
        }
    }

    const addToCart = async (id: string, stripeId: string) => {
        try {
            setIsAddToCartLoading(true)

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
            console.log(response)

            // Refetch userCart
            await getUserCart()

            if (response.status === 201) {
                toast.success("Product added to cart")
            } else {
                toast.success("Product quantity updated")
            }

        } catch (err) {
            console.log(err)
            setIsAddToCartError((err as null))
        } finally {
            setIsAddToCartLoading(false)
        }
    }

    const increaseItemQty = async (id: string) => {
        try {
            setIsIncreaseItmQtyLoading(true)

            const token = await getAccessTokenSilently()

            const response = await axios.put("http://localhost:3500/api/user/cart/increase-item-qty", {
                productId: id,
                email: user?.email
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            await getUserCart()
            toast.info(response.data.message)
        } catch (err) {
            console.log(err)
            setIsIncreaseItmQtyError((err as null))
        } finally {
            setIsIncreaseItmQtyLoading(false)
        }
    }

    const decreaseItemQty = async (id: string) => {
        try {
            setIsDecreaseItmQtyLoading(true)

            const token = await getAccessTokenSilently()

            const response = await axios.put("http://localhost:3500/api/user/cart/decrease-item-qty", {
                productId: id,
                email: user?.email
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            await getUserCart()
            toast.info(response.data.message)
        } catch (err) {
            console.log(err)
            setIsDecreaseItmQtyError((err as null))
        } finally {
            setIsDecreaseItmQtyLoading(false)
        }
    }

    const removeFromCart = async (id: string) => {
        try {
            setIsRemoveFromCartLoading(true)

            const token = await getAccessTokenSilently()

            const response = await axios.put("http://localhost:3500/api/user/cart/remove", {
                productId: id,
                email: user?.email
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            await getUserCart()
            toast.success(response.data.message)

        } catch (err) {
            setIsRemoveFromCartError((err as null))

        } finally {
            setIsRemoveFromCartLoading(false)
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
            increaseItemQty,
            decreaseItemQty,
            removeFromCart,
            cartQuantity,
            getItemQuantity,
            isUserCartLoading,
            isUserCartError,
            isAddToCartLoading,
            isAddToCartError,
            isRemoveFromCartLoading,
            isRemoveFromCartError,
            isIncreaseItmQtyLoading,
            isIncreaseItmQtyError,
            isDecreaseItmQtyLoading,
            isDecreaseItmQtyError

        }}>
            {children}
        </CartContext.Provider>
    
    )

}