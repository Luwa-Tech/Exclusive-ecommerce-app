import { MdOutlineDelete } from "react-icons/md"
import useStoreProducts from "../../hooks/useStoreProducts"
import useWishlistApiQuery from "../../hooks/query/useWishlistApiQuery"
import useCartApiQuery from "../../hooks/query/useCartApiQuery"
import useUserStore from "../../hooks/useUserStore"

type wishListType = {
    id: string
}

const WishListItem = (props: wishListType) => {
    const { storeProducts } = useStoreProducts()
    const {userCart} = useUserStore()
    const {useRemoveFromWishlistMutation} = useWishlistApiQuery()
    const {useAddToCartMutation} = useCartApiQuery()
    const item = storeProducts?.find(i => i._id === props.id)

    if (item === null) return null

    if (item === undefined) {
        return (
            <h1>item is undefined</h1>
        )
    }
    const quantity = userCart?.find(item => item.id === props.id)?.quantity || 0
    const addToCartMutation = useAddToCartMutation(props?.id, item?.stripeID)
    const removeFromWishlistMutation = useRemoveFromWishlistMutation(props?.id)

    return (
        <>
            <li className="relative w-[7.5rem] h-[15rem] md:w-[11rem]">
                <button onClick={() => removeFromWishlistMutation.mutate()} className="absolute top-[15px] right-[10px]">
                    <MdOutlineDelete />
                </button>
                <div className="bg-secondary-500 px-[1.5rem] py-[2.4rem] flex items-center justify-center">
                    <img className="w-[6rem] h-[5rem] object-contain" src={item?.image} loading="lazy" decoding="async" alt="product image" />
                </div>
                <div className="flex flex-col ">
                    <p className="mt-[.4rem] text-[.7rem] md:text-[.9rem] mb-[.4rem] font-medium md:leading-[1.5rem] text-textColor-600">
                        {/*  refactor (remove 0) */}
                        {

                            item?.name?.length || 0 > 13 ? `${item?.name.substring(0, 14)}..` : item?.name
                        }
                    </p>
                    <button disabled={quantity > 0} className={`text-textColor-400 hover:opacity-[0.6] ${quantity > 0 ? "bg-opacity-[0.5]" : ""} bg-textColor-600 px-[.4rem] py-[.3rem] w-full`} onClick={() => addToCartMutation.mutate()}>{quantity > 0 ? "Added to cart" : "Add to cart"}</button>
                    <div>
                        <span className="text-[.7rem] md:text-[.9rem] font-medium md:leading-[1.5rem] text-secondary-700 mr-[0.4rem]">${item?.price}</span>
                        {item?.discountPrice && <span className="text-[.7rem] md:text-[.9rem] font-medium text-textColor-600 md:leading-[1.5rem] opacity-[0.5] line-through">${item?.discountPrice}</span>}
                    </div>
                </div>
            </li>
        </>
    )
}

export default WishListItem