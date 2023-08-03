import { useParams } from "react-router-dom"
import useStoreProducts from "../hooks/useStoreProducts"
import {CiHeart} from "react-icons/ci"
import {TbTruckDelivery} from "react-icons/tb"
import {GiReturnArrow} from "react-icons/gi"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
// import { formatCurrency } from "../utils"

// type itemParamType = {
//     id?: string
// }


const ProductDetail = () => {
    const {id} = useParams()
    const {storeProducts} = useStoreProducts()
    console.log(id)

    const {            
        increaseItemQuantity,
        decreaseItemQuantity,
        getItemQuantity
 
    } = useContext(CartContext)

    if(id === undefined) {
        return (
            <h1>cannot access items</h1>
        )
    }
    const quantity = getItemQuantity(id)
    const product = storeProducts.find(item => item.id === id)

    return (
        <main className="mt-[3rem] md:mt-[5rem] mb-[4rem] md:mb-[5rem] md:w-[90%] md:mx-auto">
            <section className="flex flex-col md:items-start md:flex-row gap-4 md:gap-[6rem] md:w-[60%] md:mx-auto px-[.5rem] md:px-auto">

                <div className="bg-secondary-500 px-[1.5rem] py-[2.4rem] md:px-[3rem] md:py-[4rem] flex items-center justify-center">
                    <img className="w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] object-contain"  src={product?.image} />
                </div>

                <section>
                    <div className="border-b-[.1rem] border-textColor-600 pb-2">
                        <h2 className="text-textColor-600 md:text-[1.5rem] mt-[1.2rem] md:mt-[1.5rem] font-semibold md:leading-[1.5rem] md:tracking-[0.045rem]">{product?.name}</h2>
                        <p className="text-textColor-600 md:text-[1.5rem] mt-[1.2rem] font-normal md:leading-[1.5rem] md:tracking-[0.045rem]">{product?.price}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-[1.2rem]">
                        {
                            quantity === 0 && <button onClick={() => increaseItemQuantity(id)} className="bg-secondary-700 rounded-[0.25ren] text-textColor-400 px-[1rem] py-[.6rem] md:px-[3rem] md:py-[0.625rem] w-[90%] md:w-auto hover:opacity-[0.6]">Add To Cart</button>
                        }
                        
                        { 
                            quantity > 0 && <div className="border-textColor-600 border-[.1rem] items-center flex justify-between w-[8rem]">
                            <button onClick={() => decreaseItemQuantity(id)} className="hover:bg-secondary-700 hover:text-textColor-400 px-[.65rem] py-[.1rem] border-textColor-600 border-r-[.1rem] md:px-[.9rem] md:py-[.1rem] text-[1.3rem]">-</button>
                            <span className="px-[1.1rem] md:px-[1.4rem]">{quantity}</span>
                            <button onClick={() => increaseItemQuantity(id)} className="hover:bg-secondary-700 hover:text-textColor-400 px-[.65rem] py-[.1rem] border-textColor-600 border-l-[.1rem] md:px-[.9rem] md:py-[.1rem] text-[1.3rem]">+</button>
                        </div>
                        }

                        <div className="hover:bg-secondary-700 border-[.1rem] border-textColor-600 px-[.65rem] py-[.4rem] hover:text-textColor-400">
                            <CiHeart className="w-[1.2rem] h-[1.6rem]"/>
                        </div>
                    </div>

                    <div className="border-textColor-600 border-[.1rem] mt-[1.2rem] w-[60%] md:w-auto rounded-[.2rem] py-[.6rem] pl-[.5rem] md:px-[.6rem] md:py-[.7rem]">
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