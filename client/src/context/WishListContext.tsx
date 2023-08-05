import { ReactElement, ReactNode, createContext, useState } from "react"

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
    const [wishList, setWishList] = useState<WishListType[]>([])

    const AddToWishList = (id: string) => {
        setWishList(currItems => {
            if(currItems.find(item => item.id === id)) {
                return [...currItems]
            }else {
                return [...currItems, {id}]
            }
        })
    }

    const RemoveFromWishList = (id:string) => {
        setWishList(currItems => {
            return currItems.filter(item => item.id !== id)
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