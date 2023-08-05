import CartLineItem from "./CartLineItem"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

const Cart = () => {
    const {cart, cartQuantity} = useContext(CartContext)
    

    return (
        <>
        <div>
            <div className="pb-6 border-b-[.1rem] mb-[.7rem]">
            <h2 className="text-[1.2rem]">{`cart (${cartQuantity})`}</h2>
            </div>
        <ul>
            {
                cart.map(items => <CartLineItem key={items.id} {...items} />)
            }
        </ul>
        </div>
        </>
    )
}

export default Cart