import { useParams } from "react-router-dom"
import useStoreProducts from "../hooks/useStoreProducts"
import { CiHeart } from "react-icons/ci"
import { TbTruckDelivery } from "react-icons/tb"
import { GiReturnArrow } from "react-icons/gi"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import useWishlist from "../hooks/useWishlist"
// import { formatCurrency } from "../utils"
import useAuth from "../hooks/useAuth"

import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"



// TODO
// Fetch product details from database
const ProductDetail = () => {
    const { id } = useParams()
    const { storeProducts } = useStoreProducts()
    const { isUser } = useAuth()
    const {wishList, addToWishlist} = useWishlist()

    const {
        increaseItemQuantity,
        decreaseItemQuantity,
        getItemQuantity

    } = useContext(CartContext)

    if (id === undefined) {
        return (
            <h1>cannot access items</h1>
        )
    }
    const quantity = getItemQuantity(id)
    const product = storeProducts.find(item => item._id === id)
    const itemInList = wishList.find(item => item._id === id)
    if (product === undefined) {
        return (
            <h1>An Error occured when fetching product details</h1>
        )
    }


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
                        {
                            quantity === 0 && <button onClick={() => increaseItemQuantity(id, product.stripeID)} className="bg-secondary-700 rounded-[0.25ren] text-textColor-400 px-[1rem] py-[.6rem] md:px-[3rem] md:py-[0.625rem] w-[90%] md:w-auto hover:opacity-[0.6]">Add To Cart</button>
                        }

                        {
                            quantity > 0 && <div className="items-center flex justify-between w-[8rem]">
                                <button onClick={() => decreaseItemQuantity(id)} className="bg-secondary-700 text-textColor-400 px-[.75rem] py-[.1rem] text-[1.3rem] hover:opacity-[0.6]">-</button>
                                <span className="px-[1.1rem] md:px-[1.4rem]">{quantity}</span>
                                <button onClick={() => increaseItemQuantity(id, product.stripeID)} className="bg-secondary-700 text-textColor-400 px-[.65rem] py-[.1rem] text-[1.3rem] hover:opacity-[0.6]">+</button>
                            </div>
                        }

                        {isUser && <button onClick={() => addToWishlist(id)} className={`focus:bg-secondary-700 border-[.1rem] px-[.65rem] py-[.3rem] hover:opacity-[0.6] focus:text-textColor-400 ${itemInList ? "bg-secondary-700 text-textColor-400" : ""}`}>
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