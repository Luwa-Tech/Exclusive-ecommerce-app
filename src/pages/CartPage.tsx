import MobileCartSummary from "../components/cart/MobileCartSummary"
import DesktopCartSummary from "../components/cart/DesktopCartSummary"
import useRenderHook from "../hooks/useRenderHook"
import useStoreProducts from "../hooks/useStoreProducts"
import { formatCurrency } from "../utils"
import { NavLink } from "react-router-dom"
import Cart from "../components/cart/Cart"
import { useAuth0 } from "@auth0/auth0-react"
import { ImSpinner } from "react-icons/im"
import LoginButton from "../components/LoginButton"
import { useQuery } from "@tanstack/react-query"
import useCartApi, { CartType } from "../hooks/api/useCartApi"
import useCheckoutApiQuery from "../hooks/query/useCheckoutApiQuery"

const CartPage = () => {
    const { isAuthenticated } = useAuth0()
    const { storeProducts } = useStoreProducts()
    const { isMobile, isDesktop } = useRenderHook()
    const { getUserCart } = useCartApi()
    const {useCheckoutMutation} = useCheckoutApiQuery()

    // Validate user authentication
    if (!isAuthenticated) {
        return (
            <main className="mt-[3rem] mb-[2rem] md:mb-[3rem]">
                <section className="px-[.4rem] text-center flex flex-col gap-[1.5rem] md:max-w-[50%] md:mx-auto">
                    <h1 className="md:text-[1rem] text-[.8rem]">Please login to view your cart</h1>
                    <LoginButton />
                </section>
            </main>
        )
    }

    const {
        data: userCart,
        isLoading: isCartLoading,
        error: cartError
    } = useQuery<CartType[]>({
        queryKey: ["userCart"],
        queryFn: getUserCart
    })

    if (cartError) {
        return <div>Error: {cartError.message}</div>;
    }

    if (userCart === undefined) {
        // Handle undefined cart better: return a jsx instead
        return (
            <main>
                <h1>We are experiencing some issues lately, but we'll fix it soon</h1>
            </main>
        )
    }

    const checkoutMutation = useCheckoutMutation(userCart)
    const totalPrice: number = userCart?.reduce((total, cartItem) => {
        const item = storeProducts.find(i => i._id === cartItem.id)
        return total + (item?.price || 0) * cartItem.quantity
    }, 0)

    if (isCartLoading) {
        return (
            <main className="flex justify-center items-center my-[5rem]">
                <ImSpinner className="h-10 w-10 animate-spin" />
            </main>
        )
    }

    if (userCart?.length === 0) {
        return (
            <main className="mt-[3rem] mb-[2rem] md:mb-[3rem]">
                <section className="px-[.4rem] text-center flex flex-col gap-[1.5rem] md:max-w-[50%] md:mx-auto">
                    <h1 className="text-[2rem] md:text-[2.5rem]">Your cart is currently empty</h1>
                    <p className="md:text-[1rem] text-[.8rem]">Before you proceed to checkout, you must add some products to your cart. You will find a lot of interesting products on our "Shop" page.</p>
                    <NavLink to="/">
                        <button className="bg-secondary-700 text-textColor-400 px-[.8rem] py-[.5rem] rounded-[.2rem] uppercase md:hover:opacity-[0.6]">return to shop</button>
                    </NavLink>
                </section>
            </main>
        )
    }

    return (
        <main className="px-4 md:px-0 md:mt-[2rem] md:w-[80%] md:mx-auto mb-[4rem]">
            <section className="md:flex md:gap-6">
                {
                    isMobile && <MobileCartSummary totalPrice={totalPrice} />
                }
                <div className="md:w-[80%]">
                    <Cart />
                </div>
                <div className="md:flex md:flex-col md:gap-4 md:w-[25%]">
                    {
                        isMobile && <button onClick={() => checkoutMutation.mutate()} className="bg-secondary-700 text-textColor-400 px-[.5rem] py-[.4rem] rounded-[.2rem] uppercase mt-2 w-[100%] hover:opacity-[0.6]">{checkoutMutation.isPending ? <ImSpinner className="animate-spin h-6 w-6 mx-auto" /> : `Checkout ${formatCurrency(totalPrice)}`}</button>
                    }
                    {

                        isDesktop && (
                                <DesktopCartSummary
                                    totalPrice={totalPrice}
                                    checkoutMutation={checkoutMutation}
                                />
                        )
                    }
                    <div className="border-[.1rem] mt-[.7rem] md:mt-0 px-[.3rem] py-[.3rem]">
                        <p>Returns are easy</p>
                        <p className="text-[.8rem] max-w-[80%] md:max-w-[100%]">Free return within 15 days for Official Store items and 7 days for other eligible items See more</p>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default CartPage