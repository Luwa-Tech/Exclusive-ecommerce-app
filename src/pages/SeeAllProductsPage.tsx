import { useLocation } from "react-router"
import Product, { ProductType } from "../components/Product"
import { JSX } from "react/jsx-runtime"

const SeeAllProductsPage = () => {
    const location = useLocation()
    const data = location.state?.data

    return (
        <main className="mt-[3rem] mb-[4.5rem] md:mt-[4rem] md:mb-[6.5rem] md:w-[90%] md:mx-auto">
            <section className="px-[.4rem] md:px-0 grid grid-cols-3 md:grid-cols-6 gap-6">
            {
                data.map((items: JSX.IntrinsicAttributes & ProductType) => {
                    return (
                        <Product key={items.id} {...items}/>
                    )
                })
            }
            </section>
        </main>
    )
}

export default SeeAllProductsPage