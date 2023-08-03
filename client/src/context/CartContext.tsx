import { 
    ReactElement,
    ReactNode,
    createContext,   
    useState 
} from "react"


type Cart = {
    id: string,
    qty: number 
}

type ChildrenType = {
    children: ReactElement | ReactElement[] | ReactNode
}

type CartContextInitType = {
    removeFromCart: (id: string) => void,
    increaseItemQuantity: (id: string) => void,
    decreaseItemQuantity: (id: string) => void,
    getItemQuantity: (id: string) => number,
    cart: Cart[]
}

export const CartContext = createContext({} as CartContextInitType)

export const CartContextProvider = ({children}: ChildrenType) => {
    const [cart, setCart] = useState<Cart[]>([])

    const getItemQuantity = (id: string) => {
        return cart.find(item => item.id === id)?.qty || 0
    }

    const increaseItemQuantity = (id: string) => {
        setCart(currItems => {
            if(!currItems.find(item => item.id === id)){
                return [...currItems, {id, qty: 1}]
            } else {
                return currItems.map(item => {
                    if(item.id === id) {
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
                        
                        return {...item, qty: item.qty - 1}
                    }else {
                        return item
                    }
                })
            }
        })
    } 

    const removeFromCart = (id: string) => {
        setCart(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    

    return (
        <CartContext.Provider value={{
            removeFromCart,
            increaseItemQuantity,
            decreaseItemQuantity,
            getItemQuantity,
            cart
        }}>
            {children}
        </CartContext.Provider>
    
    )

}