import { useContext } from "react"
import { WishlistContext, WishlistContextType } from "../context/WishListContext"

const useWishlist = (): WishlistContextType => {
    return useContext(WishlistContext)
}

export default useWishlist