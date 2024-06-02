import axios from "axios"
import { createContext, ReactElement, useEffect, useState } from "react"

export type StoreProductType = {
    _id: string,
    name: string,
    price: number,
    image: string,
    stripeID: string,
    discount: number | null,
    discountPrice: number | null,
    rating: number,
    category: string,
}


export type StoreContextType = {
    storeProducts: StoreProductType[],
    loading: boolean,
    error: string | null
}

const initStoreContext: StoreContextType = {
    storeProducts: [],
    loading: false,
    error: null
}

export const storeContext = createContext<StoreContextType>(initStoreContext)

export type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

    // Get all products and store to state
    // Consume products only in home and wishlist page
    // Hide the wishlist icon from users not logged in


const StoreProductsProvider = ({ children }: ChildrenType) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [storeProducts, setStoreProducts] = useState<StoreProductType[]>([])

    const getAllProducts = async () => {
        setLoading(true)
        try {
            const response = await axios.get("http://localhost:3500/products")
            console.log(response)
            setStoreProducts(response.data)
        } catch(err) {
            // setError(err.message || 'An error occurred while fetching data');
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <storeContext.Provider value={{ storeProducts, loading, error }}>
            {children}
        </storeContext.Provider>
    )
}

export default StoreProductsProvider