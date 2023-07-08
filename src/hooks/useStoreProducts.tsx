import { useContext } from "react"
import { storeContext } from "../context/StoreContext"
import { StoreContextType } from "../context/StoreContext"

const useStoreProducts = (): StoreContextType => {
    return useContext(storeContext)
}

export default useStoreProducts