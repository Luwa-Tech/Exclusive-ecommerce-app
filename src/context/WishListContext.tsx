import { ReactElement, ReactNode, createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { toast } from 'react-toastify'

type WishListType = {
    id: string,
}

type WishListContextType = {
    AddToWishList: (id: string) => void,
    RemoveFromWishList: (id: string) => void,
    wishList: WishListType[]
}

type ChildrenType = {
    children: ReactElement | ReactElement[] | ReactNode
}

export const WishListContext = createContext({} as WishListContextType)

export const WishListContextProvider = ({children}: ChildrenType) => {
    const [wishList, setWishList] = useLocalStorage<WishListType[]>("wishlist-items", [])

    const AddToWishList = (id: string) => {
        setWishList(currItems => {
            if(currItems.find(item => item.id === id)) {
                return [...currItems]
            }else {
                try {
                    return [...currItems, {id}]
                } finally {
                    toast.success("Product added to wishlist!")
                }
                
            }
        })
    }

    const RemoveFromWishList = (id:string) => {
        setWishList(currItems => {
            try {
                return currItems.filter(item => item.id !== id)
            } finally {
                toast.success("Product removed from wishlist!")
            }
        })
    }

    return (
        <WishListContext.Provider value={{
            AddToWishList,
            RemoveFromWishList,
            wishList
        }}>
            {children}
        </WishListContext.Provider>
    )
}