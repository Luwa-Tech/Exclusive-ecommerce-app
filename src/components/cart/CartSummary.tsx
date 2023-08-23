import { formatCurrency } from "../../utils"

type CartSummaryType = {
    totalPrice: number,
    checkoutHandler?: () => void
}

export const MobileCartSummary = (props: CartSummaryType) => {
    return (
        <div className="border-[.1rem] py-3 px-2 mb-3">
            <p className="uppercase text-[.8rem] text-textColor-500 border-b-[.1rem] mb-2">cart summary</p>
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{formatCurrency(props.totalPrice)}</p>
            </div>
        </div>
    )
}

export const DesktopCartSummary = (props: CartSummaryType) => {
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
            <button onClick={props.checkoutHandler} className="bg-secondary-700 text-textColor-400 px-[.5rem] py-[.4rem] rounded-[.2rem] uppercase mt-2 w-[100%] hover:opacity-[0.6]">Checkout {formatCurrency(props.totalPrice)}</button>
        </div>
    )
}