import {
    useMutation
} from "@tanstack/react-query"
import useCheckoutApi from "../api/useCheckoutApi"
import { CartType } from "../api/useCartApi"

const useCheckoutApiQuery = () => {
    const {checkoutHandler} = useCheckoutApi()

    const useCheckoutMutation = (cart: CartType[]) => {
        return useMutation({
            mutationFn: () => checkoutHandler(cart)
        })
    }

    return {
        useCheckoutMutation
    }
}

export default useCheckoutApiQuery