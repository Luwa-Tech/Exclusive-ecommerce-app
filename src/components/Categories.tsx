export type CategoriesType = {
    image: string,
    categoryName: string
}


const Categories = ({...items}: CategoriesType) => {
    return (
        <div>
            <img src={items.image} alt="category image" /> 
            <p>{items.categoryName}</p> 
        </div>  
    )
}

export default Categories