import Hero from "../components/Hero"
import ProductSlider from "../components/product-slider/ProductSlider"
import { BsChevronRight, BsChevronLeft } from "react-icons/bs"
import { useMedia } from "../hooks/useMedia"


const Home = () => {
    const {isDesktop} = useMedia()
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
                <div className="md:flex md:justify-between md:items-center"> 
                    <h2 className="text-[1.5rem] md:text-[2.25rem] font-semibold md:leading-[3rem] md:tracking-[0.09rem] text-textColor-600 md:mb-[0.4rem]">Flash Sales</h2>
                {   isDesktop &&                 
                    <div className="flex justify-center items-center border-2 border-slate-600">
                        <span className=" md:px-[.2rem] md:py-[.2rem] md:rounded-[1rem] bg-secondary-500">
                            <BsChevronLeft />
                        </span>
                        <span className="md:px-[.2rem] md:ml-[10rem] md:py-[.2rem] md:rounded-[1rem] bg-secondary-500">
                        <BsChevronRight />
                        </span>
                    </div>
                }
                </div>
                <ProductSlider />
                <button className="ml-[8.5rem] md:ml-[31rem] mt-[2rem] md:mt-[2.5rem] rounded-[0.25rem] bg-secondary-700 py-[.5rem]  md:py-[1rem] px-[1.5rem] text-[.8rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:px-[3rem] text-textColor-400">View All Products</button>
            </section>
        </main>
    )
}

export default Home