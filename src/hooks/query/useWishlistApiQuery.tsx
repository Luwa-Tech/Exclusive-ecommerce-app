import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query"
import useWishlistApi from "../api/useWishlistApi"

const useWishlistApiQuery = () => {
    const queryClient = useQueryClient()
    const {
        addToWishlist,
        removeFromWishlist
    } = useWishlistApi()

    const useAddToWishlistMutation = (id: string) => {
        return useMutation({
            mutationFn: () => addToWishlist(id),
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["wishlist"]
                })
            }
        })
    }

    const useRemoveFromWishlistMutation = (id: string) => {
        return useMutation({
            mutationFn: () => removeFromWishlist(id),
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ["wishlist"]
                })
            }
        })
    }

    return {
        useAddToWishlistMutation,
        useRemoveFromWishlistMutation
    }
}

export default useWishlistApiQuery