export type ProductType = {
    id: number
    name: string,
    image: string,
    price: number,
    rating: number,
    discount: number,
    discountPrice?: number,
    category: string,
}


const Product = ({...items}: ProductType) => {
    return (
        <div className="md:w-[12rem]">
           <div className="bg-secondary-500 px-[1.7rem] py-[2.4rem] flex items-center justify-center"> 
           <img className="md:w-[5.7rem] object-cover" src={items.image} alt="product image" />
           </div>
        <div className="flex flex-col ">
            <p className="md:text-[1rem] font-medium md:leading-[1.5rem] text-textColor-600">{items.name}</p>
            <span className="md:text-[1rem] font-medium md:leading-[1.5rem] text-secondary-700">${items.price}</span>
            <span>{items.rating}</span>
        </div>
        </div>
    )
}

export default Product