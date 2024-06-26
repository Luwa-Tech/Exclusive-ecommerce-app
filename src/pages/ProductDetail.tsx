import { useParams } from "react-router-dom"
import useStoreProducts from "../hooks/useStoreProducts"
import { CiHeart } from "react-icons/ci"
import { TbTruckDelivery } from "react-icons/tb"
import { GiReturnArrow } from "react-icons/gi"

// import { formatCurrency } from "../utils"
import { useAuth0 } from "@auth0/auth0-react"

import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

import useCartApiQuery from "../hooks/query/useCartApiQuery"
import useWishlistApiQuery from "../hooks/query/useWishlistApiQuery"
import useUserStore from "../hooks/useUserStore"

const ProductDetail = () => {
    const { id } = useParams()
    const { storeProducts } = useStoreProducts()
    const { isAuthenticated } = useAuth0()
    const { wishlist, userCart } = useUserStore()
    const { useAddToCartMutation } = useCartApiQuery()
    const { useAddToWishlistMutation } = useWishlistApiQuery()

    const product = storeProducts?.find(item => item._id === id)

    if (id === undefined || product === undefined) {
        return (
            <main className="md:flex md:justify-center md:items-center px-[.6rem] md:px-0">
            <h1 className="md:my-[10rem] my-[7rem] text-[1.2rem] md:text-[2.3rem]">Cannot access product details. Please try again later.</h1>
        </main>
        )
    }

    const quantity = userCart?.find(item => item.id === id)?.quantity || 0
    const itemInList = wishlist?.find(item => item.id === id)
    const addToCartMutation = useAddToCartMutation(id, product?.stripeID)
    const addToWishlistMutation = useAddToWishlistMutation(id)


    return (
        <main className="mt-[3rem] md:mt-[5rem] mb-[4rem] md:mb-[5rem] md:w-[90%] md:mx-auto">
            <section className="flex flex-col md:items-start md:flex-row gap-4 md:gap-[6rem] md:w-[60%] md:mx-auto px-[.5rem] md:px-auto">

                <div className="bg-secondary-500 px-[1.5rem] py-[2.4rem] md:px-[3rem] md:py-[4rem] flex items-center justify-center">
                    <LazyLoadImage className="w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] object-contain" src={product.image} />
                </div>

                <section>
                    <div className="border-b-[.1rem] pb-2">
                        <h2 className="text-textColor-600 md:text-[1.5rem] mt-[1.2rem] md:mt-[1.5rem] font-semibold md:leading-[1.5rem] md:tracking-[0.045rem]">{product.name}</h2>
                        <p className="text-textColor-600 md:text-[1.5rem] mt-[1.2rem] font-normal md:leading-[1.5rem] md:tracking-[0.045rem]">${product.price}.00</p>
                    </div>
                    <div className="flex items-center gap-2 mt-[1.2rem]">
                        {/* TODO: Refactor quantity === 0  */}

                        <button disabled={quantity > 0 || !isAuthenticated} onClick={() => addToCartMutation.mutate()} className={` rounded-[0.25rem] text-textColor-400 ${quantity > 0 || !isAuthenticated ? "bg-textColor-600 bg-opacity-[0.5]" : "bg-secondary-700"} px-[1rem] py-[.6rem] md:px-[3rem] md:py-[0.625rem] w-[90%] md:w-auto hover:opacity-[0.6]`}>{quantity > 0 ? "Added to cart" : "Add to cart"}</button>

                        {/* {
                            quantity > 0 && <div className="items-center flex justify-between w-[8rem]">
                                <button onClick={() => decreaseItemQty(id)} className="bg-secondary-700 text-textColor-400 px-[.75rem] py-[.1rem] text-[1.3rem] hover:opacity-[0.6]">-</button>
                                <span className="px-[1.1rem] md:px-[1.4rem]">{quantity}</span>
                                <button onClick={() => addToCart(id)} className="bg-secondary-700 text-textColor-400 px-[.65rem] py-[.1rem] text-[1.3rem] hover:opacity-[0.6]">+</button>
                            </div>
                        } */}

                        {isAuthenticated && <button onClick={() => addToWishlistMutation.mutate()} className={`focus:bg-secondary-700 border-[.1rem] px-[.65rem] py-[.3rem] hover:opacity-[0.6] focus:text-textColor-400 ${itemInList ? "bg-secondary-700 text-textColor-400" : ""}`}>
                            <CiHeart className="w-[1.2rem] h-[1.6rem]" />
                        </button>}
                    </div>

                    <div className="border-[.1rem] mt-[1.2rem] w-[100%] md:w-auto rounded-[.2rem] py-[.6rem] pl-[.5rem] md:px-[.6rem] md:py-[.7rem]">
                        <div className="flex items-center gap-4 pb-2 border-b-[.1rem]">
                            <TbTruckDelivery />
                            <div className="text-textColor-600">
                                <h3 className="text-[.9rem] md:text-[1rem] font-medium leading-[1.2rem] md:leading-[1.5rem]">Free Delivery</h3>
                                <p className="text-[.6rem] md:text-[0.75rem] font-medium leading-[.8rem] md:leading-[1.125rem]underline">Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <GiReturnArrow />
                            <div className="text-textColor-600">
                                <h3 className="text-[.9rem] md:text-[1rem] font-medium leading-[1.2rem] md:leading-[1.5rem]">Return Delivery</h3>
                                <p className="text-[.6rem] md:text-[0.75rem] font-medium leading-[1.2rem] md:leading-[1.125rem]underline">Free 30 Days Delivery Returns. Details</p>
                            </div>
                        </div>
                    </div>
                </section>

            </section>

            <section>

            </section>
        </main>
    )
}

export default ProductDetail