import Cart from "../components/cart/Cart"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { DesktopCartSummary, MobileCartSummary } from "../components/cart/CartSummary"
import useRenderHook from "../hooks/useRenderHook"
import useStoreProducts from "../hooks/useStoreProducts"
import { formatCurrency } from "../utils"


const CartPage = () => {
    const {cart} = useContext(CartContext)
    const {storeProducts} = useStoreProducts()
    const {isMobile, isDesktop} = useRenderHook()


    if(cart.length === 0) {
        return (
            <h1>Cart Is Empty!</h1>
        )
    }

    const totalPrice = cart.reduce((total, cartItem) => {
        const item = storeProducts.find(i => i.id === cartItem.id)
        return total + (item?.price || 0) * cartItem.qty
    }, 0)

    // const client = axios.create({
    //     baseURL: "https://localhost:3500/checkout" 
    //   });

    // const checkoutHandler = async () => {
    //     const response = await client.post("", {
    //         cart
    //     })
    //     if(response) {
    //         window.location.assign(response.url)
    //     }
    //     console.log(response)
    // }

    const checkoutHandler = async () => {
        await fetch("https://exclusive-ecommerce-api.glitch.me/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(cart)
        }).then(response => {
            return response.json();
        }).then(response => {
            if(response.url) {
                window.location.assign(response.url) //forward user to stripe
            }
        })
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
                    isMobile && <button onClick={checkoutHandler} className="bg-secondary-700 text-textColor-400 px-[.5rem] py-[.4rem] rounded-[.2rem] uppercase mt-2 w-[100%] hover:opacity-[0.6]">Checkout {formatCurrency(totalPrice)}</button>
                }
                {
                    isDesktop && <DesktopCartSummary totalPrice={totalPrice} checkoutHandler={checkoutHandler} />
                }
                <div className="bg-slate-400 px-[.2rem] py-[.3rem]">
                    <p>Returns are easy</p>
                    <p className="text-[.8rem]">Free return within 15 days for Official Store items and 7 days for other eligible items See more</p>
                </div>
            </div>

            </section>
        </main>
    )
}

export default CartPage