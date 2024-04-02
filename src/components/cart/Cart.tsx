import CartLineItem from "./CartLineItem"
import useCart from "../../hooks/useCart"

const Cart = () => {
    const {userCart, cartQuantity} = useCart()
    

    return (
        <>
        <div>
            <div className="pb-6 border-b-[.1rem] mb-[.7rem]">
            <h2 className="text-[1.2rem]">{`cart (${cartQuantity})`}</h2>
            </div>
        <ul>
            {
                userCart.map(items => <CartLineItem key={items.id} {...items} />)
            }
        </ul>
        </div>
        </>
    )
}

export default Cart