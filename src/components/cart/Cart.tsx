import CartLineItem from "./CartLineItem"
import useCartApiQuery from "../../hooks/query/useCartApiQuery"

const Cart = () => {
    const {getCachedData} = useCartApiQuery()
    const userCart = getCachedData()
    const cartQuantity = userCart?.reduce((qty, item) => item.quantity + qty, 0)
    

    return (
        <>
        <div>
            <div className="pb-6 border-b-[.1rem] mb-[.7rem]">
            <h2 className="text-[1.2rem]">{`cart (${cartQuantity})`}</h2>
            </div>
        <ul>
            {
                userCart?.map(items => <CartLineItem key={items.id} {...items} />)
            }
        </ul>
        </div>
        </>
    )
}

export default Cart