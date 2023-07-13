import Hero from "../components/Hero"
import ProductSlider from "../components/product-slider/ProductSlider"
import useStoreProducts from "../hooks/useStoreProducts"
import { useRef } from "react"
// import { useMedia } from "../hooks/useMedia"
import Product from "../components/Product"
// import Categories from "../components/Categories"


import Slider from "react-slick"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"


const Home = () => {
    const sliderRef = useRef(null)
    const prev = sliderRef?.current?.slickPrev
    const next = sliderRef?.current?.slickNext

    const {storeProducts} = useStoreProducts()
    const flashSalesProducts = storeProducts.filter(item => item.discount !== "")

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
                <ProductSlider sectionCaption="Today's" sectionTitle="Flashsales" prev={prev} next={next}/>
                <Slider ref={sliderRef} {...settings}>
                    {
                        flashSalesProducts.map(items => {
                            return (
                                <Product {...items}/>
                            )
                        })
                    }
                </Slider>
                <button className="ml-[8.5rem] md:ml-[31rem] mt-[2rem] md:mt-[2.5rem] rounded-[0.25rem] bg-secondary-700 py-[.5rem]  md:py-[1rem] px-[1.5rem] text-[.8rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:px-[3rem] text-textColor-400">View All Products</button>
            </section>
        </main>
    )
}

export default Home