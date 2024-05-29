import { formatCurrency } from "../../utils"
import {CartType} from "../../context/CartContext"
import {ImSpinner} from "react-icons/im"

type CartSummaryType = {
    totalPrice: number,
    checkoutHandler: (cart: CartType[]) => void,
    userCart: CartType[],
    isCheckoutLoading: boolean
}

const DesktopCartSummary = (props: CartSummaryType) => {
    return (
        <div className="px-[.7rem] py-[.4rem] md:h-[11rem] border-[.1rem]">
            <div className="py-2 border-b-[.1rem]">
            <h2 className="uppercase">cart summary</h2>
            </div>
            
            <div className="py-2 border-b-[.1rem]">
                <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{formatCurrency(props.totalPrice)}</p>
                </div>
                <p className="text-textColor-500 text-[.8rem]">Delivery fees not included yet</p>
            </div>
            <button onClick={() => props.checkoutHandler(props.userCart)} className="bg-secondary-700 text-textColor-400 px-[.5rem] py-[.4rem] rounded-[.2rem] uppercase mt-2 w-[100%] hover:opacity-[0.6]">{props.isCheckoutLoading ? <ImSpinner className="animate-spin h-4 w-4 mx-auto"/> : `Checkout ${formatCurrency(props.totalPrice)}`}</button>
        </div>
    )
}

export default DesktopCartSummary