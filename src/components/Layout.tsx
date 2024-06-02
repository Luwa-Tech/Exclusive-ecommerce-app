import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import Loading from "./Loading"
import useStoreProducts from "../hooks/useStoreProducts"
import { useAuth0 } from "@auth0/auth0-react"
import { useQuery } from "@tanstack/react-query"
import useCartApi, { CartType } from "../hooks/api/useCartApi"
import useWishlistApi, { WishlistType } from "../hooks/api/useWishlistApi"

export type UserContextType = {
    userCart: CartType[] | undefined,
    isCartLoading: boolean,
    isCartError: Error | null,
    wishlist: WishlistType[] | undefined,
    isWishlistLoading: boolean,
    isWishlistError: Error | null,
    cartQuantity: number | undefined
}

const Layout = () => {
    const { isStorePending } = useStoreProducts()
    const { isLoading, isAuthenticated } = useAuth0()
    const { getUserCart } = useCartApi()
    const { getWishlist } = useWishlistApi()

    const { data: userCart, isLoading: isCartLoading, error: isCartError } = useQuery({
        queryKey: ["userCart"],
        queryFn: getUserCart,
        enabled: isAuthenticated
    })

    const { data: wishlist, isLoading: isWishlistLoading, error: isWishlistError } = useQuery({
        queryKey: ["wishlist"],
        queryFn: getWishlist,
        enabled: isAuthenticated
    })

    const cartQuantity = userCart?.reduce((qty, item) => item.quantity + qty, 0)


    if (isLoading || isStorePending || isCartLoading || isWishlistLoading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="layout">
            <header>
                <NavBar
                    userCart={userCart}
                    wishlist={wishlist}
                    cartQuantity={cartQuantity}
                />
            </header>

            <main>
                <Outlet context={{
                    userCart,
                    isCartLoading,
                    isCartError,
                    wishlist,
                    isWishlistLoading,
                    isWishlistError,
                    cartQuantity
                } satisfies UserContextType} />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout

