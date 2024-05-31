import {
    useMutation,
    useQueryClient,
    useQuery
} from "@tanstack/react-query"
import useWishlistApi from "../api/useWishlistApi"

const useWishlistApiQuery = () => {
    const queryClient = useQueryClient()
    const {
        getWishlist,
        addToWishlist,
        removeFromWishlist
    } = useWishlistApi()

    const useGetWishlist = () => {
        return useQuery({
            queryKey: ["wishlist"],
            queryFn: () => getWishlist()
        })
    }

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
        useGetWishlist,
        useAddToWishlistMutation,
        useRemoveFromWishlistMutation
    }
}

export default useWishlistApiQuery