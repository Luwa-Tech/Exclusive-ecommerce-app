
import { useSearchParams } from "react-router-dom"
import useStoreProducts from "../hooks/useStoreProducts"
import Product, { ProductType } from "../components/Product"

const SearchResults = () => {
    const { storeProducts } = useStoreProducts()
    const [URLSearchParams] = useSearchParams()

    const searchQuery = URLSearchParams.get("query")
    if (searchQuery === null) {
        return (
            <main className="md:flex md:justify-center md:items-center px-[.6rem] md:px-0">
                <h1 className="md:my-[10rem] mt-[6rem] mb-[8rem] text-[1.2rem] md:text-[2.3rem]">Please enter a search term</h1>
            </main>
        )
    }

    const filteredProducts = storeProducts?.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    if (!storeProducts) {
        return (
            <main className="md:flex md:justify-center md:items-center px-[.6rem] md:px-0">
                <h1 className="md:my-[10rem] mt-[6rem] mb-[8rem] text-[1.2rem] md:text-[2.3rem]">There was an error loading the products. Please try again later.</h1>
            </main>
        );
    }

    if (filteredProducts?.length === 0) {
        return (
            <main className="md:flex md:justify-center md:items-center px-[.6rem] md:px-0">
                <h1 className="md:my-[10rem] mt-[6rem] mb-[8rem] text-center text-[1.2rem] md:text-[2.3rem]">Product not available, perhaps next time</h1>
            </main>
        );
    }

    return (
        <main className="mt-[7rem] mb-[10rem]">
            <section className="md:w-[90%] md:mx-auto grid grid-cols-2 md:grid-cols-6 gap-[.9rem] px-[.5rem] md:px-0 md:gap-1">
                {
                    filteredProducts?.map((items: JSX.IntrinsicAttributes & ProductType) => {
                        return (
                            <Product key={items._id} {...items} />
                        )
                    })
                }
            </section>
        </main>
    )
}

export default SearchResults