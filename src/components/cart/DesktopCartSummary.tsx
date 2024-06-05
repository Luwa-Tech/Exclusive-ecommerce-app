import { formatCurrency } from "../../utils"
import {ImSpinner} from "react-icons/im"
import { UseMutationResult } from "@tanstack/react-query"

type CartSummaryType = {
    totalPrice: number,
    checkoutMutation:  UseMutationResult<void, Error, void, unknown>,
}

const DesktopCartSummary = ({
    totalPrice, 
    checkoutMutation}: CartSummaryType) => {

    return (
        <div className="px-[.7rem] py-[.4rem] md:h-[11rem] border-[.1rem]">
            <div className="py-2 border-b-[.1rem]">
            <h2 className="uppercase">Cart Summary</h2>
            </div>
            
            <div className="py-2 border-b-[.1rem]">
                <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{formatCurrency(totalPrice)}</p>
                </div>
                <p className="text-textColor-500 text-[.8rem]">Delivery fees not included yet</p>
            </div>
            <button onClick={() => checkoutMutation.mutate()} className="bg-secondary-700 text-textColor-400 px-[.5rem] py-[.4rem] rounded-[.2rem] uppercase mt-2 w-[100%] hover:opacity-[0.6]">{checkoutMutation.isPending ? <ImSpinner className="animate-spin h-6 w-6 mx-auto"/> : `Checkout ${formatCurrency(totalPrice)}`}</button>
        </div>
    )
}

export default DesktopCartSummary