import Hero from "../components/Hero"
import ProductSlider from "../components/product-slider/ProductSlider"
import useStoreProducts from "../hooks/useStoreProducts"
import Product, { ProductType } from "../components/Product"
import Services from "../components/Categories"
import useRenderHook from "../hooks/useRenderHook"
import { MobileScroll, DesktopScroll } from "../components/ScrollToTop"

import { useRef } from "react"
import { JSX } from "react/jsx-runtime"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

import boombox from "../assets/images/shop now/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
import playstation from "../assets/images/shop now/ps5-slim-goedkope-playstation_large 1.png"
import attractiveWoman from "../assets/images/shop now/attractive-woman-wearing-hat-posing-black-background 1.png"
import amazonEcho from "../assets/images/shop now/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
import perfume from "../assets/images/shop now/652e82cd70aa6522dd785109a455904c.png"




const Home = () => {
    const {isDesktop, isMobile} = useRenderHook()
    const sliderRef = useRef<Slider | null>(null)
    console.log(sliderRef.current)
  
    const prev = sliderRef.current?.slickPrev!
    const next = sliderRef.current?.slickNext!
    
    const {storeProducts} = useStoreProducts()
    const flashSalesProducts = storeProducts.filter((item: { discount: string }) => item.discount !== "")

    const bestSellingProducts = storeProducts.filter((item: { discount: string; id: string }) => item.discount === "" && (parseInt(item.id) > 7 && parseInt(item.id) <= 15))
    console.log(bestSellingProducts)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        rows: 1,
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
              arrows: false,
              rows: 1,
            
            
            }
          }
        ]
  };

    return (
        <main>
            <section>
            <Hero/>
            </section>
            <section className="mt-[.7rem] flex flex-col pl-[.5rem] md:pl-0 mb-[3rem] md:mt-[2rem] md:w-[90%] md:mx-auto">
                <ProductSlider sectionCaption="Today's" sectionTitle="Flashsales" prev={() => prev()} next={() => next()}/>
                <Slider ref={sliderRef} {...settings}>
                    {
                        flashSalesProducts.map((items: JSX.IntrinsicAttributes & ProductType) => {
                            return (
                                <Product key={items.id} {...items}/>
                            )
                        })
                    }
                </Slider>
                <button className="w-[40%] md:w-[20%] mx-auto hover:opacity-[0.6] mt-[2rem] md:mt-[2.5rem] rounded-[0.25rem] bg-secondary-700 py-[.5rem]  md:py-[1rem] px-[1.5rem] text-[.8rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:px-[3rem] text-textColor-400">View All Products</button>
            </section>

            <section className=" pl-[.5rem] pr-[.5rem] md:p-auto md:pl-0 md:w-[90%] md:mx-auto mt-[2rem]">
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

            <section className="flex flex-row justify-between bg-buttonColor-400 py-[2.5rem] px-[1.4rem] md:py-[3rem] md:px-[3rem] md:h-[28rem] md:mt-[2rem] md:w-[90%] md:mx-auto mt-[2rem] relative">
                    <div className="absolute md:static flex flex-col gap-[.8rem] md:gap-[1.2rem] md:w-[60%]">
                      <p className="text-buttonColor-500 md:text-[1rem] md:leading-[1.25rem] font-semiBold">Categories</p>
                      <h2 className="text-textColor-400 text-[1.4rem] max-w-[60%] md:text-[3rem] font-semibold leading-[1.7rem] md:leading-[3.75rem] md:tracking-[0.12rem] md:max-w-[90%]">Enhance Your Music Experience</h2>
                      <button className="cursor-pointer rounded-[0.25rem] bg-buttonColor-500 text-textColor-400 text-[.7rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:max-w-[20%] max-w-[35%] py-[.4rem] px-[.5rem] md:py-[.7rem] md:px-[1.2rem]">Buy Now!</button>
                    </div>
                    <div className="ml-[10rem] md:ml-auto w-[15rem] md:w-auto ">
                      <img src={boombox} decoding="async" loading="eager"/>
                    </div>
            </section>

            <section className="pl-[.4rem] flex flex-col mb-[3rem] md:mb-0 md:pl-0 md:mt-[2rem] md:w-[90%] md:mx-auto mt-[2rem] relative">
            <ProductSlider sectionCaption="Our Products" sectionTitle="Explore Our Products" prev={() =>prev()} next={() =>next()}/>
            <Slider ref={sliderRef} {...{...settings, rows: 2}}>
                    {
                        storeProducts.map((items: JSX.IntrinsicAttributes & ProductType) => {
                            return (
                                <Product key={items.id} {...items}/>
                            )
                        })
                    }

                </Slider>
                <button className="w-[40%] md:w-[20%] mx-auto mt-[2rem] md:mt-[2.5rem] rounded-[0.25rem] bg-secondary-700 py-[.5rem]  md:py-[1rem] px-[1.5rem] text-[.8rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:px-[3rem] text-textColor-400">View All Products</button>
            </section>

            {  
              isDesktop &&         
              <section className="md:mt-[2rem] md:w-[90%] md:mx-auto mt-[2rem]">
            <div className="flex items-center gap-[.7rem]">
                <span className="w-[1rem] md:w-[1.25rem] h-[2rem] md:h-[2.5rem] bg-secondary-700"></span>
                <span className=" mr-[1.5rem] text-[.8rem]  md:text-[1rem] font-semibold text-secondary-700 md:leading-[1.25rem]">Featured</span>
              </div>
              <h2 className="text-[1.2rem] md:text-[2rem] font-semibold md:leading-[3rem] md:tracking-[0.09rem] text-textColor-600 md:mb-[0.4rem]">New Arrival</h2>

              <section className="grid grid-cols-4 grid-rows-2 gap-4">
                <div className="bg-buttonColor-400 pl-[1.2rem]  pt-[5.4rem] relative col-span-2 row-span-2">
                  <div className="absolute bottom-[20px] flex flex-col gap-[.7rem] items-start">
                    <h2 className="text-[1.5rem] font-semiBold leading-[1.5rem] tracking-[0.045rem] text-textColor-400">Playstation 5</h2>
                    <p className="text-[0.875rem] font-normal leading=[1.3125rem] text-textColor-400 max-w-[15rem]">Black and White version of the PS5 coming out on sale.</p>
                    <button className="text-textColor-400 text-[1rem] font-medium leading-[1.5rem] hover:underline">Shop Now</button>
                  </div>
                    <div className="max-w-[33rem]">
                      <img className="object-cover" src={playstation} decoding="async" loading="eager"/>
                    </div>
                </div>

                <div className="darkGray relative col-span-2 pl-[5.5rem] pt-[.4rem]">
                  <div className="absolute bottom-[20px] flex flex-col gap-[.7rem] items-start left-[10px]">
                    <h2 className="text-[1.5rem] font-semiBold leading-[1.5rem] tracking-[0.045rem] text-textColor-400">Women's Collection</h2>
                    <p className="text-[0.875rem] font-normal leading=[1.3125rem] text-textColor-400 max-w-[15rem]">Featured women collections that give you another vibe.</p>
                    <button className="text-textColor-400 text-[1rem] font-medium leading-[1.5rem] hover:underline">Shop Now</button>
                  </div>
                    <div className="max-w-[100%]">
                      <img src={attractiveWoman} decoding="async" loading="eager"/>
                    </div>
                </div>

                <div className="lightGray relative pl-[3.4rem] py-[1.4rem]">
                  <div className="absolute bottom-[20px] flex flex-col gap-[.2rem] items-start left-[10px]">
                    <h2 className="text-[1.5rem] font-semiBold leading-[1.5rem] tracking-[0.045rem] text-textColor-400">Speakers</h2>
                    <p className="text-[0.875rem] font-normal leading=[1.3125rem] text-textColor-400">Amazing wireless speakers</p>
                    <button className="text-textColor-400 text-[1rem] font-medium leading-[1.5rem] hover:underline">Shop Now</button>
                  </div>
                    <div>
                      <img src={amazonEcho} decoding="async" loading="eager"/>
                    </div>
                </div>

                <div className="lightGray relative pl-[3.2rem] py-[1.4rem]">
                  <div className="absolute bottom-[20px] flex flex-col gap-[.2rem] items-start left-[10px]">
                    <h2 className="text-[1.5rem] font-semiBold leading-[1.5rem] tracking-[0.045rem] text-textColor-400">Perfume</h2>
                    <p className="text-[0.875rem] font-normal leading=[1.3125rem] text-textColor-400">GUCCI INTENSE OUD EDP</p>
                    <button className="text-textColor-400 text-[1rem] font-medium leading-[1.5rem] hover:underline">Shop Now</button>
                  </div>
                    <div>
                      <img src={perfume} decoding="async" loading="eager"/>
                    </div>
                </div>
              </section>
              </section>
            }

            {
              isDesktop && <section className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between md:mt-[3rem] mb-[2.2rem] md:mb-[2.5rem] md:w-[70%] md:mx-auto mt-[2.2rem]">
                <Services />
            </section>
            }

            <section className="relative md:mt-[4rem] md:mb-[6rem]">
              {isMobile && <MobileScroll />}
              {isDesktop && <DesktopScroll />}
            </section>

        </main>
    )
}

export default Home