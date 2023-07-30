import { ReactElement, ReactNode, createContext, useState } from "react"

type WishListType = {
    id: number,
}

type WishListContextType = {
    AddToWishList: (id:number) => void,
    RemoveFromWishList: (id: number) => void,
    wishList: WishListType[]
}

type ChildrenType = {
    children: ReactElement | ReactElement[] | ReactNode
}

export const WishListContext = createContext({} as WishListContextType)

export const WishListContextProvider = ({children}: ChildrenType) => {
    const [wishList, setWishList] = useState<WishListType[]>([])

    const AddToWishList = (id:number) => {
        //check if item exist in wishlist
        const itemExist = wishList.find(item => item.id === id)
        if(itemExist) {
            // setWishList(currItems => [...currItems])
            return
        }else {
            setWishList(currItems => [...currItems, {id}])
        }
    }

    const RemoveFromWishList = (id:number) => {
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