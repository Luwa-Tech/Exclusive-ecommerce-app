import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query"
import useCartApi from "../api/useCartApi"
import { CartType } from "../api/useCartApi"

const useCartApiQuery = () => {
    const queryClient = useQueryClient()
    const {
        addToCart,
        increaseItemQty,
        decreaseItemQty,
        removeFromCart
    } = useCartApi()

    const getCachedData = (): CartType[] | undefined => {
        let userCartData: CartType[] | undefined
        const userCartQuery = queryClient.getQueryState(["userCart"])

        if (userCartQuery?.status === "success") {
            userCartData = queryClient.getQueryData(["userCart"])
        }

        return userCartData
    }

    // const getCachedData = (): CartType[] => {
    //     const cachedData = queryClient.getQueryData(["userCart"])
    //     return cachedData ? (Array.isArray(cachedData) ? cachedData : [cachedData]) : []
    // }

    const useAddToCartMutation = (id: string, stripeId: string) => {
        return useMutation({
            mutationFn: () => addToCart(id, stripeId),
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["userCart"]
                })
            }
        })
    }    

    const useIncreaseItmQtyMutation = (id: string) => {
        return useMutation({
            mutationFn: () => increaseItemQty(id),
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["userCart"]
                })
            }
        })
    }

    const useDecreaseItmQtyMutation = (id: string) => {
        return useMutation({
            mutationFn: () => decreaseItemQty(id),
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["userCart"]
                })
            }
        })
    }

    const useRemoveFromCartMutation = (id: string) => {
        return useMutation({
            mutationFn: () => removeFromCart(id),
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["userCart"]
                })
            }
        })
    }


    return {
        getCachedData,
        useAddToCartMutation,
        useIncreaseItmQtyMutation,
        useDecreaseItmQtyMutation,
        useRemoveFromCartMutation
    }
}

export default useCartApiQuery