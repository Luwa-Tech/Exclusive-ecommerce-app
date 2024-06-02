import { NavLink } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"

export type ProductType = {
    _id: string,
    name: string,
    image: string,
    price: number,
    rating: number,
    discount: number | null,
    discountPrice: number | null,
    category: string,
}


const Product = ({...items}: ProductType) => {
    
    return (
        <div className="w-[9.5rem] h-[15rem] md:w-[11rem] relative md:hover:border-[1.5px] md:transition-all-[0.15] md:px-1">
            <NavLink to={`${items._id}`}>
                            {items.discount !== null && <div className="bg-secondary-700 text-textColor-400 py-[0.25rem] px-[0.75rem] absolute left-[5px] top-[8px]  text-[0.6rem] md:text-[0.75rem] font-normal md:leading-[1.125rem]">{items.discount}%</div>}
                            <div className="px-[1.5rem] py-[2.4rem] flex items-center justify-center"> 
                            <LazyLoadImage className="w-[9rem] h-[6rem] object-contain" src={items.image} effect="blur"  alt="product image" />
                            </div>
                        <div className="flex flex-col ">
                            <p className="mt-[.4rem] text-[.7rem] md:text-[.9rem] font-medium md:leading-[1.5rem] text-textColor-600">
                                {
                                    items.name.length > 12 ? `${items.name.substring(0, 13)}..` : items.name
                                }
                            </p>
                            <div>
                                <span className={`text-[.7rem] md:text-[.9rem] font-medium md:leading-[1.5rem] ${items.discountPrice ? "text-textColor-600 line-through opacity-[0.5]" : "text-secondary-700"} mr-[0.4rem]`}>${items.price}</span>
                                {items.discountPrice && <span className="text-secondary-700 text-[.7rem] md:text-[.9rem] font-medium  md:leading-[1.5rem] ">${items.discountPrice}</span>}
                            </div>
                            
                        </div>
            </NavLink>
        </div>
    )
}

export default Product