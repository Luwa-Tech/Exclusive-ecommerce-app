import Cart from "../components/cart/Cart"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"

const CartPage = () => {
    const {cart} = useContext(CartContext)
    if(cart.length === 0) {
        return (
            <h1>Cart Is Empty!</h1>
        )
    }
    return (
        <main>
            <Cart />
        </main>
    )
}

export default CartPage