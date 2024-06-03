import { formatCurrency } from "../../utils"

type CartSummaryType = {
    totalPrice: number
}

const MobileCartSummary = (props: CartSummaryType) => {
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

export default MobileCartSummary