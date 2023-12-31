import {MdOutlineDelete } from "react-icons/md"
import useStoreProducts from "../../hooks/useStoreProducts"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

type CartLineItemType = {
    id: string,
    qty: number 
}

const CartLineItem = ({id, qty}: CartLineItemType) => {
    const {            
        removeFromCart,
        increaseItemQuantity,
        decreaseItemQuantity
        } = useContext(CartContext)


    const {storeProducts} = useStoreProducts()
    const item = storeProducts.find(product => product.id === id)
    if(item === null) return null
    
    if(item === undefined) {
        return (
        <h1>item is undefined</h1>
        )
    }
    
    return (
        <li className="mt-[1.2rem] md:items-left">

            <section className="flex gap-6">
                <div >
                    <img className="w-[4rem] md:w-[5rem] md:h-[5rem] object-contain" src={item?.image} />
                </div>
                <div className="md:w-[100%]">
                    <div className="md:mb-[.2rem] md:flex md:justify-between
                    ">
                        <h2>{item?.name}</h2>
                        <p>{`$${item?.price}.00`}</p>
                    </div>
                    <p className="md:text-[.8rem] md:text-textColor-500">In Stock</p>
                </div>
            </section>

            <section className="flex justify-between mt-[.7rem]">
                <div className="flex gap-3 items-end text-secondary-700 hover:bg-secondary-700 hover:text-textColor-400 px-2 py-1 rounded-[.2rem]">
                    <MdOutlineDelete className="w-[1.5rem] h-[1.6rem]"/>
                    <button onClick={() => removeFromCart(id)} className="uppercase border-none">remove</button>
                </div>
                <div className="overflow-hidden items-center flex justify-between w-[8rem]">
                    <button onClick={() => decreaseItemQuantity(id)} className="bg-secondary-700 text-textColor-400 px-[.75rem] py-[.1rem] text-[1.3rem] hover:opacity-[0.6]">-</button>
                    <span className="px-[1.1rem] md:px-[1.4rem]">{qty}</span>
                    <button onClick={() => increaseItemQuantity(id, item.stripeID)} className="bg-secondary-700 text-textColor-400 px-[.65rem] py-[.1rem] text-[1.3rem] hover:opacity-[0.6]">+</button>
                </div>
            </section>
        </li>
    )
}

export default CartLineItem