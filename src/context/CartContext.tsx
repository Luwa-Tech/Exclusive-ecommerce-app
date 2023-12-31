import { 
    ReactElement,
    ReactNode,
    createContext,   
} from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

import { toast } from 'react-toastify'


type Cart = {
    id: string,
    qty: number,
    stripeID: string
}

type ChildrenType = {
    children: ReactElement | ReactElement[] | ReactNode
}

type CartContextInitType = {
    removeFromCart: (id: string) => void,
    increaseItemQuantity: (id: string, stripeID: string) => void,
    decreaseItemQuantity: (id: string) => void,
    getItemQuantity: (id: string) => number,
    cartQuantity: number,
    cart: Cart[]
}

export const CartContext = createContext({} as CartContextInitType)

export const CartContextProvider = ({children}: ChildrenType) => {
    const [cart, setCart] = useLocalStorage<Cart[]>("shopping-cart", [])

    const cartQuantity = cart.reduce(
        (quantity, item) => item.qty + quantity,
        0
    )

    const getItemQuantity = (id: string) => {
        return cart.find(item => item.id === id)?.qty || 0
    }

    const increaseItemQuantity = (id: string, stripeID: string) => {
        setCart(currItems => {
            if(!currItems.find(item => item.id === id)){
                try {
                    return [...currItems, {id, qty: 1, stripeID: stripeID}]  
                } finally {
                    toast.success("Product added to cart!")
                } 
            } else {
                return currItems.map(item => {
                    if(item.id === id) {
                        toast.info("Product quantity updated!")
                        return {...item, qty: item.qty + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

        const decreaseItemQuantity = (id: string) => {
        setCart(currItems => {
            if(currItems.find(item => item.id === id)?.qty === 1){
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        try { 
                            return {...item, qty: item.qty - 1}
                        } finally {
                            toast.info("Product quantity updated!")
                        }
                        
                    }else {
                        return item
                    }
                })
            }
        })
    } 

    const removeFromCart = (id: string) => {
        setCart(currItems => {
            try {
                return currItems.filter(item => item.id !== id)
            } finally {
                toast.success("Product removed from cart!")
            }
        })
    }
    

    return (
        <CartContext.Provider value={{
            removeFromCart,
            increaseItemQuantity,
            decreaseItemQuantity,
            getItemQuantity,
            cartQuantity,
            cart
        }}>
            {children}
        </CartContext.Provider>
    
    )

}