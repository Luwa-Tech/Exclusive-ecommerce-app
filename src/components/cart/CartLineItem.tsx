import {MdOutlineDelete } from "react-icons/md"
import useStoreProducts from "../../hooks/useStoreProducts"
import {ImSpinner} from "react-icons/im"
import { IoMdAdd } from "react-icons/io"
import { IoMdRemove } from "react-icons/io";

type CartLineItemType = {
    id: string,
    quantity: number,
    isRemoveFromCartLoading: boolean,
    isDecreaseItmQtyLoading: boolean,
    isIncreaseItmQtyLoading: boolean,
}

const CartLineItem = ({id, quantity}: CartLineItemType) => {
    const {            
        removeFromCart,
        addToCart,
        decreaseItemQty,
        isLoading
        } = useCart()

    const increaseItmQtyMutation = useIncreaseItmQtyMutation(id)
    const decreaseItmQtyMutation = useDecreaseItmQtyMutation(id)
    const removeFromCartMutation = useRemoveFromCartMutation(id)

    const {storeProducts} = useStoreProducts()
    const item = storeProducts?.find(product => product._id === id)
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
                    <button disabled={isLoading} onClick={() => removeFromCart(id)} className="uppercase border-none">{isLoading ? <ImSpinner className="animate-spin h-3 w-3"/> : "remove"}</button>
                </div>
                <div className="overflow-hidden items-center flex justify-between w-[8rem]">
                    <button disabled={isLoading || quantity === 1} onClick={() => decreaseItemQty(id)} className={`bg-secondary-700 text-textColor-400 px-[.75rem] py-[.1rem] text-[1.3rem] hover:opacity-[0.6] ${quantity === 1 ? "opacity-[0.7]" : ""}`}>{isLoading ? <ImSpinner className="animate-spin h-3 w-3"/> : "-"}</button>
                    <span className="px-[1.1rem] md:px-[1.4rem]">{quantity}</span>
                    <button disabled={isLoading} onClick={() => addToCart(id, item.stripeID)} className="bg-secondary-700 text-textColor-400 px-[.65rem] py-[.1rem] text-[1.3rem] hover:opacity-[0.6]">{isLoading ? <ImSpinner className="animate-spin h-3 w-3"/> : "+"}</button>
                </div>
            </section>
        </li>
    )
}

export default CartLineItem