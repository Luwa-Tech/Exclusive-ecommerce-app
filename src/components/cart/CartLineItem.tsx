import {MdOutlineDelete } from "react-icons/md"
import useStoreProducts from "../../hooks/useStoreProducts"
import {ImSpinner} from "react-icons/im"
import { IoMdAdd } from "react-icons/io"
import { IoMdRemove } from "react-icons/io"
import useCartApiQuery from "../../hooks/query/useCartApiQuery"

type CartLineItemType = {
    id: string,
    quantity: number 
}

const CartLineItem = ({id, quantity}: CartLineItemType) => {
    const {
        useIncreaseItmQtyMutation,
        useDecreaseItmQtyMutation,
        useRemoveFromCartMutation
    } = useCartApiQuery()

    const increaseItmQtyMutation = useIncreaseItmQtyMutation(id)
    const decreaseItmQtyMutation = useDecreaseItmQtyMutation(id)
    const removeFromCartMutation = useRemoveFromCartMutation(id)

    const {storeProducts} = useStoreProducts()
    const item = storeProducts.find(product => product._id === id)
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
                    <button disabled={removeFromCartMutation.isPending} onClick={() => removeFromCartMutation.mutate()} className="uppercase border-none">{removeFromCartMutation.isPending ? <ImSpinner className="animate-spin h-6 w-6"/> : "remove"}</button>
                </div>
                <div className="overflow-hidden items-center flex justify-between w-[8rem]">
                    <button disabled={decreaseItmQtyMutation.isPending || quantity === 1} onClick={ () => decreaseItmQtyMutation.mutate() } className={`bg-secondary-700 text-textColor-400 w-[3rem]  flex justify-center item-center text-[1.5rem] py-[.3rem] hover:opacity-[0.6] ${quantity === 1 ? "opacity-[0.5]" : ""}`}>{decreaseItmQtyMutation.isPending ? <ImSpinner className="animate-spin h-6 w-6"/> : <IoMdRemove />}</button>
                    <span className="px-[1.1rem] md:px-[1.4rem]">{quantity}</span>
                    <button disabled={increaseItmQtyMutation.isPending} onClick={() => increaseItmQtyMutation.mutate()} className="bg-secondary-700 text-textColor-400 flex justify-center w-[3rem] item-center text-[1.5rem] py-[.3rem] text-[1.3rem] hover:opacity-[0.6]">{increaseItmQtyMutation.isPending ? <ImSpinner className="animate-spin h-6 w-6"/> : <IoMdAdd />}</button>
                </div>
            </section>
        </li>
    )
}

export default CartLineItem