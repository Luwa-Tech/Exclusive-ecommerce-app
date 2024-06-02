
import { useSearchParams } from "react-router-dom"
import useStoreProducts from "../hooks/useStoreProducts"
import Product, { ProductType } from "../components/Product"

const SearchResults = () => {
    const {storeProducts} = useStoreProducts()
    const [URLSearchParams]= useSearchParams()

    const searchQuery = URLSearchParams.get("query")
    if (searchQuery === null) return 
    
 
    const filteredProducts = storeProducts?.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    return (
        <main className="mt-[4rem] mb-[6rem]">
            <section className="md:w-[90%] md:mx-auto grid grid-cols-2 md:grid-cols-6 gap-[.9rem] px-[.5rem] md:px-0 md:gap-1">
                {
                    filteredProducts?.map((items: JSX.IntrinsicAttributes & ProductType) => {
                        return (
                            <Product key={items._id} {...items}/>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default SearchResults