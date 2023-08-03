import CartLineItem from "./CartLineItem"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const Cart = () => {
    const {cart} = useContext(CartContext)
    

    return (
        <>
        <ul>
            {
                cart.map(items => <CartLineItem key={items.id} {...items} />)
            }
        </ul>
        </>
    )
}

export default Cart