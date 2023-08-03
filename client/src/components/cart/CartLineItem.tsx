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
        <li>

            <section>
                <div>
                    <img src={item?.image} />
                </div>
                <div>
                    <div>
                        <h2>{item?.name}</h2>
                        <p>{item?.price}</p>
                    </div>
                    <p>In Stock</p>
                </div>
            </section>

            <section>
                <div>
                    <MdOutlineDelete />
                    <button onClick={() => removeFromCart(id)} className="uppercase border-none">remove</button>
                </div>
                <div className="border-textColor-600 border-[.1rem] items-center flex justify-between w-[8rem]">
                    <button onClick={() => decreaseItemQuantity(id)} className="hover:bg-secondary-700 hover:text-textColor-400 px-[.65rem] py-[.1rem] border-textColor-600 border-r-[.1rem] md:px-[.9rem] md:py-[.1rem] text-[1.3rem]">-</button>
                    <span className="px-[1.1rem] md:px-[1.4rem]">{qty}</span>
                    <button onClick={() => increaseItemQuantity(id)} className="hover:bg-secondary-700 hover:text-textColor-400 px-[.65rem] py-[.1rem] border-textColor-600 border-l-[.1rem] md:px-[.9rem] md:py-[.1rem] text-[1.3rem]">+</button>
                </div>
            </section>
        </li>
    )
}

export default CartLineItem