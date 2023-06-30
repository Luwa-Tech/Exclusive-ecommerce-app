// export type ProductType = {
//     id?: number
//     title?: string,
//     price?: number,
//     rating?: number,
//     discountPercentage?: number,
//     thumbnail?: string,
//     images?: string[] | string
// }


// const Product = (props: ProductType) => {
//     return (
//         <div key={props.id}>
//             <div className="bg-black flex flex-col">
//             <img className="w-[10rem] h-[9rem] bg-transparent" src={props.images?.[1]} alt="product thumbnail"/>
//             </div>
//         <div>
//             <p>{props.title}</p>
//             <span>{props.price}</span>
//             <span>{props.rating}</span>
//         </div>
//         </div>
//     )
// }

// export default Product