import Hero from "../components/Hero"
import ProductSlider from "../components/product-slider/ProductSlider"


const Home = () => {
    return (
        <main>
            <section>
            <Hero/>
            </section>
            <section className="mt-[.7rem] pl-[.5rem] md:pl-0 md:mt-[2rem] md:w-[90%] md:mx-auto">
                <div className="flex items-center gap-[.7rem]">
                    <span className="w-[1rem] md:w-[1.25rem] h-[2rem] md:h-[2.5rem] bg-secondary-700"></span>
                    <span className=" mr-[1.5rem] md:text-[1rem] font-semibold text-secondary-700 md:leading-[1.25rem]">Today's</span>
                </div>
                <h2 className="text-[1.5rem] md:text-[2.25rem] font-semibold md:leading-[3rem] md:tracking-[0.09rem] text-textColor-600 md:mb-[0.4rem]">Flash Sales</h2>
                <ProductSlider />
                <button className="ml-[8.5rem] md:ml-[31rem] mt-[2rem] md:mt-[2.5rem] rounded-[0.25rem] bg-secondary-700 py-[.5rem]  md:py-[1rem] px-[1.5rem] text-[.8rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:px-[3rem] text-textColor-400">View All Products</button>
            </section>
        </main>
    )
}

export default Home