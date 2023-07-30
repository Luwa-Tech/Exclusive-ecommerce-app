import { useState } from "react"

type CartItemsType = {
    id: number,
    name: string,
    price: number,
    image: string,
    qty: number
}


const useCart = () => {
    const [cart, setCart] = useState<CartItemsType[]>([])

    //addToCart
    //removeFromCart
    //submitCart
    //increaseItemQty
    //decreaseItemQty



    return {}
}

export default useCart