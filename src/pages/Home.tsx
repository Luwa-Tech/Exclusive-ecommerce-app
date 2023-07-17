import Hero from "../components/Hero"
import ProductSlider from "../components/product-slider/ProductSlider"
import useStoreProducts from "../hooks/useStoreProducts"
import { useRef } from "react"
import Product, { ProductType } from "../components/Product"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import { JSX } from "react/jsx-runtime"



const Home = () => {
    const sliderRef = useRef<Slider | null>(null)
    const prev = sliderRef.current?.slickPrev!
    const next = sliderRef.current?.slickNext!
    console.log(sliderRef.current)
    

    const {storeProducts} = useStoreProducts()
    const flashSalesProducts = storeProducts.filter(item => item.discount !== "")

    const bestSellingProducts = storeProducts.filter(item => item.discount === "" && (item.id > 7 && item.id <= 15))
    console.log(bestSellingProducts)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1             
               // initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
          
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              arrows: false
            }
          }
        ]
  };

    return (
        <main>
            <section>
            <Hero/>
            </section>
            <section className="mt-[.7rem] pl-[.5rem] md:pl-0 md:mt-[2rem] md:w-[90%] md:mx-auto">
                <ProductSlider sectionCaption="Today's" sectionTitle="Flashsales" prev={() =>prev()} next={() =>next()}/>
                <Slider ref={sliderRef} {...settings}>
                    {
                        flashSalesProducts.map(items => {
                            return (
                                <Product key={items.id} {...items}/>
                            )
                        })
                    }
                </Slider>
                <button className="ml-[8.5rem] md:ml-[31rem] mt-[2rem] md:mt-[2.5rem] rounded-[0.25rem] bg-secondary-700 py-[.5rem]  md:py-[1rem] px-[1.5rem] text-[.8rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:px-[3rem] text-textColor-400">View All Products</button>
            </section>

            <section className=" mt-[.7rem] pl-[.5rem] pr-[.5rem] md:p-auto md:pl-0 md:mt-[2rem] md:w-[90%] md:mx-auto">
            <div className="flex items-center gap-[.7rem]">
                <span className="w-[1rem] md:w-[1.25rem] h-[2rem] md:h-[2.5rem] bg-secondary-700"></span>
                <span className=" mr-[1.5rem] text-[.8rem]  md:text-[1rem] font-semibold text-secondary-700 md:leading-[1.25rem]">This Month</span>
              </div>

              <div className="flex justify-between md:items-center mb-[1.5rem] md:mb-[2.2rem]"> 
                <h2 className="text-[1.2rem] md:text-[2rem] font-semibold md:leading-[3rem] md:tracking-[0.09rem] text-textColor-600 md:mb-[0.4rem]">Best Selling Products</h2>
                    <button  className="rounded-[0.25rem] bg-secondary-700 py-[.5rem]  md:py-[.8rem] px-[1.5rem] text-[.8rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:px-[3rem] text-textColor-400">View All</button>
                </div>

                <div className="grid grid-cols-3 gap-3 md:flex md:flex-row md:justify-between">
                  {
                    bestSellingProducts.map((items: JSX.IntrinsicAttributes & ProductType) => {
                      return (
                        <Product key={items.id} {...items}/>
                      )
                    })
                  }
                </div>
            </section>

            
        </main>
    )
}

export default Home