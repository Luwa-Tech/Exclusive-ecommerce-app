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
    
    return (
        <li className="mt-[.7rem] md:items-left">

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
                <div className="border-textColor-600 border-[.1rem] items-center flex justify-between w-[8rem]">
                    <button onClick={() => decreaseItemQuantity(id)} className="hover:bg-secondary-700 hover:text-textColor-400 px-[.65rem] py-[.1rem] border-textColor-600 border-r-[.1rem] md:px-[.9rem] md:py-[.1rem] text-[1.3rem]">-</button>
                    <span className="px-[1.1rem] md:px-[1.4rem]">{qty}</span>
                    <button onClick={() => increaseItemQuantity(id)} className="hover:bg-secondary-700 hover:text-textColor-400 px-[.65rem] py-[.1rem] border-textColor-600 border-l-[.1rem] md:pl-[.9rem] md:pr-[1.1rem] md:py-[.1rem] text-[1.3rem]">+</button>
                </div>
            </section>
        </li>
    )
}

export default CartLineItem