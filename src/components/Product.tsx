import { NavLink } from "react-router-dom"

export type ProductType = {
    id: string,
    name: string,
    image: string,
    price: number,
    rating: number,
    discount: string,
    discountPrice?: string,
    category: string,
}


const Product = ({...items}: ProductType) => {
    
    return (
        <div className="w-[7.8rem] h-[15rem] md:w-[11rem] relative">
            <NavLink to={`${items.id}`}>
                            {items.discount !== "" && <div className="bg-secondary-700 text-textColor-400 py-[0.25rem] px-[0.75rem] absolute left-[5px] top-[8px]  text-[0.6rem] md:text-[0.75rem] font-normal md:leading-[1.125rem]">{items.discount}%</div>}
                            <div className="px-[1.5rem] py-[2.4rem] flex items-center justify-center"> 
                            <img className="w-[8rem] h-[6rem] object-contain" src={items.image} loading="lazy" alt="product image" />
                            </div>
                        <div className="flex flex-col ">
                            <p className="mt-[.4rem] text-[.7rem] md:text-[.9rem] font-medium md:leading-[1.5rem] text-textColor-600">
                                {
                                    items.name.length > 15 ? `${items.name.substring(0, 17)}..` : items.name
                                }
                            </p>
                            <div>
                                {/* REFACTOR THIS SECTION WHEN DONE */}
                                {
                                items.discountPrice ? (
                                    <span className="text-[.7rem] md:text-[.9rem] font-medium md:leading-[1.5rem] text-textColor-600 line-through mr-[0.4rem] opacity-[0.5]">${items.price}</span>
                                ) : (
                                    <span className="text-[.7rem] md:text-[.9rem] font-medium md:leading-[1.5rem] text-secondary-700 mr-[0.4rem]">${items.price}</span>
                                )
                                }
                            
                                {items.discountPrice && <span className="text-secondary-700 text-[.7rem] md:text-[.9rem] font-medium  md:leading-[1.5rem] ">${items?.discountPrice}</span>}
                            </div>
                            
                        </div>
            </NavLink>
        </div>
    )
}

export default Product