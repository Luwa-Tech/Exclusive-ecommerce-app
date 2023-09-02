import { createContext, ReactElement, useState } from "react"
import { storeData } from "../data/storeData"

export type StoreProductType = {
    "id": string,
    "name": string,
    "price": number,
    "discount": string,
    "discountPrice": string,
    "image": string,
    "rating": number,
    "category": string,
    "stripeID": string
}


export type StoreContextType = {
    storeProducts: StoreProductType[]
}
 
const initStoreContext: StoreContextType = {
    storeProducts: []
}

export const storeContext = createContext<StoreContextType>(initStoreContext)
 
export type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

const StoreProductsProvider = ({ children }: ChildrenType) => {
    const [storeProducts, _setStoreProducts] = useState<StoreProductType[]>(storeData)

    return (
        <storeContext.Provider value={{storeProducts}}>
            {children}
        </storeContext.Provider>
    )

}


export default StoreProductsProvider