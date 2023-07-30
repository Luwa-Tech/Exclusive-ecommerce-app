import { 
    ReactElement,
    ReactNode,
    createContext,   
    useState 
} from "react"


type Cart = {
    id: number,
    qty: number,

}

type ChildrenType = {
    children: ReactElement | ReactElement[] | ReactNode
}

type CartContextInitType = {
    AddToCart: (id: number) => void,
    RemoveFromCart: (id: number) => void,
    SubmitCart: () => void,
    IncreaseItemQuantity: (id: number) => void,
    DecreaseItemQuantity: (id: number) => void,
    cart: Cart[]
}

export const CartContext = createContext({} as CartContextInitType)

export const CartContextProvider = ({children}: ChildrenType) => {
    const [cart, setCart] = useState<Cart[]>([])

    const AddToCart = (id: number) => {
        setCart(currItems => {
            if(currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, qty: 1,}]
            } else {
                return [...currItems]
            }
        })   
    }

    const RemoveFromCart = (id: number) => {
        setCart(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const IncreaseItemQuantity = (id: number) => {
        setCart(currItems => {
            if(currItems.find(item => item.id === id)) {
                return currItems.map(item => {
                    if(item.id === id) {
                        return {...item, qty: item.qty + 1}
                    } else {
                        return item
                    }
                })
            } else {
                return [...currItems]
            }
        }) 
    }

    const DecreaseItemQuantity = (id: number) => {
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
    
    const SubmitCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            RemoveFromCart,
            SubmitCart,
            AddToCart,
            IncreaseItemQuantity,
            DecreaseItemQuantity,
            cart
        }}>
            {children}
        </CartContext.Provider>
    
    )

}