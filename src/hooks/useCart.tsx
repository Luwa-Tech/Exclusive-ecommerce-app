import { useContext } from "react"
import { CartContext, CartContextType } from "../context/CartContext"

// TODO
// 1. Migrate useCart and useWishlist to a context provider - DONE
// 2. Delete old models from DB - DONE
// 3. Test implementation
// 4. Implement loading functionality where needed
// 5. Check other fixes
// 6. Implement robust search functionality

const useCart = (): CartContextType => {
    return useContext(CartContext)
}

export default useCart