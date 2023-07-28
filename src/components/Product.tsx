import {CiHeart} from "react-icons/ci"
import { AiOutlineEye} from "react-icons/ai"
import useRenderHook from "../hooks/useRenderHook"

export type ProductType = {
    id: number
    name: string,
    image: string,
    price: number,
    rating: number,
    discount: string,
    discountPrice?: string,
    category: string,
}


const Product = ({...items}: ProductType) => {
    const {isDesktop} = useRenderHook()
    return (
        <div className="w-[7.5rem] h-[15rem] md:w-[11rem] relative">
                {items.discount !== "" && <div className="bg-secondary-700 text-textColor-400 py-[0.25rem] px-[0.75rem] absolute left-[5px] top-[8px]  text-[0.6rem] md:text-[0.75rem] font-normal md:leading-[1.125rem]">{items.discount}%</div>}
                {
                    isDesktop && 
                    <div className="absolute top-[8px] ml-[6.6rem] md:ml-[9rem]">
                        <div className="bg-primary-500 cursor-pointer mb-[.5rem] md:mb-[.3rem] z-[2] py-[.2rem] px-[.2rem] rounded-[1rem]">
                            <CiHeart />
                        </div>
                        <div className="bg-primary-500 cursor-pointer py-[.2rem] px-[.2rem] rounded-[1rem]">
                            <AiOutlineEye />
                        </div>
                    </div>
                }
                <div className="bg-secondary-500 px-[1.5rem] py-[2.4rem] flex items-center justify-center"> 
                <img className="w-[5rem] h-[5rem] object-contain" src={items.image} loading="eager" decoding="async" alt="product image" />
                </div>
            <div className="flex flex-col ">
                <p className="mt-[.4rem] text-[.7rem] md:text-[.9rem] font-medium md:leading-[1.5rem] text-textColor-600">
                    {
                        items.name.length > 15 ? `${items.name.substring(0, 17)}..` : items.name
                    }
                </p>
                <div>
                <span className="text-[.7rem] md:text-[.9rem] font-medium md:leading-[1.5rem] text-secondary-700 mr-[0.4rem]">${items.price}</span>
                {items.discountPrice && <span className="text-[.7rem] md:text-[.9rem] font-medium text-textColor-600 md:leading-[1.5rem] opacity-[0.5] line-through">${items?.discountPrice}</span>}
                </div>
                <span>{items.rating}</span>
            </div>
        </div>
    )
}

export default Product

{/* <p>{
    item.description.length > 250 ? `${item.description.substring(0, 250)}...` : item.description
}</p> */}