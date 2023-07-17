export type CategoriesType = {
    id: number,
    imageIcon: string,
    categoryName: string
}


const Categories = ({...items}: CategoriesType) => {
    return (
        <div>
            <img src={items.imageIcon} alt="category image" /> 
            <p>{items.categoryName}</p> 
        </div>  
    )
}

export default Categories