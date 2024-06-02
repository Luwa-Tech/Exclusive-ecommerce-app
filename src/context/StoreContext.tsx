import {
    useQueryClient,
    useQuery
} from "@tanstack/react-query"
import { createContext, ReactElement } from "react"
import useStoreApi, { StoreProductType } from "../hooks/api/useStoreApi"


export type StoreContextType = {
    storeProducts: StoreProductType[] | undefined
    isStoreError: Error | null
    isStorePending: boolean
    getStoreDataFromCache: () => StoreProductType[] | undefined
}

const initStoreContext: StoreContextType = {
    storeProducts: undefined,
    isStoreError: null,
    isStorePending: false,
    getStoreDataFromCache: () => undefined 
}

export const storeContext = createContext<StoreContextType>(initStoreContext)

export type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

const StoreProductsProvider = ({ children }: ChildrenType) => {
    const queryClient = useQueryClient()
    const { getStoreItems } = useStoreApi()

    const {
        data: storeProducts,
        isPending: isStorePending,
        error: isStoreError } = useQuery({
            queryKey: ["storeProducts"],
            queryFn: getStoreItems
        })

    const getStoreDataFromCache = (): StoreProductType[] | undefined => {
        let store: StoreProductType[] | undefined
        const storeQuery = queryClient.getQueryState(["storeProducts"])

        if (storeQuery?.status === "success") {
            store = queryClient.getQueryData(["storeProducts"])
        }

        return store
    }

    return (
        <storeContext.Provider value={{
            storeProducts,
            isStoreError,
            isStorePending,
            getStoreDataFromCache
        }}>
            {children}
        </storeContext.Provider>
    )
}

export default StoreProductsProvider