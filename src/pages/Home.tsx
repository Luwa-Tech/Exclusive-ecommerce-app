import ProductSlider from "../components/product-slider/ProductSlider"
import useStoreProducts from "../hooks/useStoreProducts"
import Product, { ProductType } from "../components/Product"
import Services from "../components/Categories"
import useRenderHook from "../hooks/useRenderHook"
import usePreventMobileScroll from "../hooks/usePreventMobileScroll"
import { MobileScroll, DesktopScroll } from "../components/ScrollToTop"
import SearchBar from "../components/SearchBar"

import { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { JSX } from "react/jsx-runtime"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

import HeroImage from "../assets/images/hero/hero_endframe__cvklg0xk3w6e_large 2.png"

import { AiFillApple } from "react-icons/ai"
import boombox from "../assets/images/shop now/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
import playstation from "../assets/images/shop now/ps5-slim-goedkope-playstation_large 1.png"
import attractiveWoman from "../assets/images/shop now/attractive-woman-wearing-hat-posing-black-background 1.png"
import amazonEcho from "../assets/images/shop now/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
import perfume from "../assets/images/shop now/652e82cd70aa6522dd785109a455904c.png"


type CustomEventListenerOptions = {
  capture?: boolean,
  passive?: boolean,
  once?: boolean
}

const Home = () => {
    const {isDesktop, isMobile} = useRenderHook()
    const {touchStart, preventTouch} = usePreventMobileScroll()

    const sliderRef1 = useRef<Slider | null>(null)
    const sliderRef2 = useRef<Slider | null>(null)

    const goToPrev1 = () => {
      if (sliderRef1.current) {
        sliderRef1.current.slickPrev()
      }
    }

    const goToNext1 = () => {
      if (sliderRef1.current) {
        sliderRef1.current.slickNext()
      }
    }

    const goToPrev2 = () => {
      if (sliderRef2.current) {
        sliderRef2.current.slickPrev()
      }
    }

    const goToNext2 = () => {
      if (sliderRef2.current) {
        sliderRef2.current.slickNext()
      }
    }
    
    const {storeProducts} = useStoreProducts()
    const flashSalesProducts = storeProducts.filter((item: { discount: string }) => item.discount !== "")

    const bestSellingProducts = storeProducts.filter((item: { discount: string; id: string }) => item.discount === "" && (parseInt(item.id) > 7 && parseInt(item.id) <= 15))

    
    useEffect(() => {
      window.addEventListener("touchstart", touchStart)
      window.addEventListener("touchmove", preventTouch, {passive: false} as CustomEventListenerOptions )

      return () => {
        window.removeEventListener("touchstart", touchStart)
        window.removeEventListener("touchmove", preventTouch, {passive: false} as CustomEventListenerOptions )
      }
    }, [preventTouch, touchStart])

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
              slidesToShow: 3,
              slidesToScroll: 1,            
              arrows: false,
              className: "center",
              centerMode: true,
              rows: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
          
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              className: "center",
              centerMode: true,
              rows: 1,
            }
          }
        ]
  };

    return (
        <main>
            <section>
              {isMobile && <SearchBar />}
      
            <div className="bg-textColor-600 md:flex md:gap-2 md:items-center md:justify-center py-[2.5rem] px-[1.4rem] h-[16rem] mt-[.2rem] md:w-full md:min-h-[24.5rem] md:py-4 md:px-[13rem] relative">
                <article className="text-textColor-400 absolute bottom-[50px] left-[20px] md:static">
                    <div className="flex gap-2 items-center">
                        <AiFillApple />
                        <p className="text-[.85rem] md:text-[1rem] font-normal md:leading-[1.5rem]">iphone 14 Series</p>
                    </div>
                    <h1 className="text-[1.8rem] w-[80%] md:text-[3rem] font-semibold md:leading-[3.75rem] md:tracking-[0.12rem] md:w-[70%]">Up to 10% off voucher</h1>
                    <span className="text-[.85rem] md:text-[1rem] font-medium md:leading-[1.5rem] hover:underline cursor-pointer">Shop Now</span>
                </article>

                <div className="md:mt-auto ml-[8rem] md:ml-auto w-[20rem] md:w-auto">
                    <LazyLoadImage className="md:w-[40rem]" src={HeroImage} effect="blur" alt="hero image"/>
                </div>
            </div> 
            </section>
            <section className="mt-[.7rem] flex flex-col pl-[.5rem] md:pl-0 mb-[3rem] md:mt-[2rem] md:w-[90%] md:mx-auto">
                <ProductSlider sectionCaption="Today's" sectionTitle="Flashsales" prev={() => goToPrev1()} next={() => goToNext1()}/>
                <Slider ref={sliderRef1} {...settings}>
                    {
                        flashSalesProducts.map((items: JSX.IntrinsicAttributes & ProductType) => {
                            return (
                                <Product key={items.id} {...items}/>
                            )
                        })
                    }
                </Slider>
                <Link to="allProducts" state={{data: flashSalesProducts}} className="mx-auto w-[40%] md:w-[20%]">
                <button className="w-full hover:opacity-[0.6] mt-[2rem] md:mt-[2.5rem] rounded-[0.25rem] bg-secondary-700 py-[.5rem]  md:py-[1rem] px-[1.5rem] text-[.8rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:px-[3rem] text-textColor-400">View All Products</button>
                </Link>
            </section>

            <section className=" pl-[.5rem] pr-[.5rem] md:p-auto md:pl-0 md:w-[90%] md:mx-auto mt-[2rem]">
            <div className="flex items-center gap-[.7rem]">
                <span className="w-[1rem] md:w-[1.25rem] h-[2rem] md:h-[2.5rem] bg-secondary-700"></span>
                <span className=" mr-[1.5rem] text-[.8rem]  md:text-[1rem] font-semibold text-secondary-700 md:leading-[1.25rem]">This Month</span>
              </div>

              <div className="flex justify-between md:items-center mb-[1.5rem] md:mb-[2.2rem]"> 
                <h2 className="text-[1.2rem] md:text-[2rem] font-semibold md:leading-[3rem] md:tracking-[0.09rem] text-textColor-600 md:mb-[0.4rem]">Best Selling Products</h2>
                <Link to="allProducts" state={{data: bestSellingProducts}}>
                    <button  className="rounded-[0.25rem] bg-secondary-700 py-[.5rem]  md:py-[.8rem] px-[1.5rem] text-[.8rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:px-[3rem] text-textColor-400 hover:opacity-[0.6]">View All</button>
                </Link>
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
                    <article className="absolute md:static flex flex-col gap-[.8rem] md:gap-[1.2rem] md:w-[60%]">
                      <p className="text-buttonColor-500 md:text-[1rem] md:leading-[1.25rem] font-semiBold">Categories</p>
                      <h2 className="text-textColor-400 text-[1.4rem] max-w-[60%] md:text-[3rem] font-semibold leading-[1.7rem] md:leading-[3.75rem] md:tracking-[0.12rem] md:max-w-[90%]">Enhance Your Music Experience</h2>
                      <button className="cursor-pointer rounded-[0.25rem] bg-buttonColor-500 text-textColor-400 text-[.7rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:max-w-[20%] max-w-[35%] py-[.4rem] px-[.5rem] md:py-[.7rem] md:px-[1.2rem]">Buy Now!</button>
                    </article>
                    <div className="ml-[10rem] md:ml-auto w-[15rem] md:w-auto ">
                      <LazyLoadImage src={boombox} effect="blur"/>
                    </div>
            </section>

            <section className="pl-[.4rem] flex flex-col mb-[3rem] md:mb-0 md:pl-0 md:mt-[2rem] md:w-[90%] md:mx-auto mt-[2rem] relative">
            <ProductSlider sectionCaption="Our Products" sectionTitle="Explore Our Products" prev={() => goToPrev2()} next={() => goToNext2()}/>
            <Slider ref={sliderRef2} {...{...settings, rows: 2}}>
                    {
                        storeProducts.map((items: JSX.IntrinsicAttributes & ProductType) => {
                            return (
                                <Product key={items.id} {...items}/>
                            )
                        })
                    }

                </Slider>
                <Link to="allProducts" state={{data: storeProducts}} className="mx-auto w-[40%] md:w-[20%]">
                <button className="w-full mt-[2rem] md:mt-[2.5rem] rounded-[0.25rem] bg-secondary-700 py-[.5rem]  md:py-[1rem] px-[1.5rem] text-[.8rem] md:text-[1rem] font-medium md:leading-[1.5rem] md:px-[3rem] text-textColor-400 hover:opacity-[0.6]">View All Products</button>
                </Link>
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
                <div className="bg-buttonColor-400 pl-[1.2rem]  pt-[6.6rem] relative col-span-2 row-span-2">
                  <div className="absolute z-[10] bottom-[20px] flex flex-col gap-[.7rem] items-start">
                    <h2 className="text-[1.5rem] font-semiBold leading-[1.5rem] tracking-[0.045rem] text-textColor-400">Playstation 5</h2>
                    <p className="text-[0.875rem] font-normal leading=[1.3125rem] text-textColor-400 max-w-[15rem]">Black and White version of the PS5 coming out on sale.</p>
                    <button className="text-textColor-400 text-[1rem] font-medium leading-[1.5rem] hover:underline">Shop Now</button>
                  </div>
                    <div className="max-w-[33rem]">
                      <LazyLoadImage className="object-cover" src={playstation} effect="blur"/>
                    </div>
                </div>

                <div className="darkGray relative col-span-2 pl-[5.5rem] pt-[.4rem]">
                  <div className="absolute z-[10] bottom-[20px] flex flex-col gap-[.7rem] items-start left-[10px]">
                    <h2 className="text-[1.5rem] font-semiBold leading-[1.5rem] tracking-[0.045rem] text-textColor-400">Women's Collection</h2>
                    <p className="text-[0.875rem] font-normal leading=[1.3125rem] text-textColor-400 max-w-[15rem]">Featured women collections that give you another vibe.</p>
                    <button className="text-textColor-400 text-[1rem] font-medium leading-[1.5rem] hover:underline">Shop Now</button>
                  </div>
                    <div className="max-w-[100%]">
                      <LazyLoadImage src={attractiveWoman} effect="blur"/>
                    </div>
                </div>

                <div className="lightGray relative pl-[3.4rem] py-[1.4rem]">
                  <div className="absolute z-[10] bottom-[20px] flex flex-col gap-[.2rem] items-start left-[10px]">
                    <h2 className="text-[1.5rem] font-semiBold leading-[1.5rem] tracking-[0.045rem] text-textColor-400">Speakers</h2>
                    <p className="text-[0.875rem] font-normal leading=[1.3125rem] text-textColor-400">Amazing wireless speakers</p>
                    <button className="text-textColor-400 text-[1rem] font-medium leading-[1.5rem] hover:underline">Shop Now</button>
                  </div>
                    <div>
                      <LazyLoadImage src={amazonEcho} effect="blur"/>
                    </div>
                </div>

                <div className="lightGray relative pl-[3.2rem] py-[1.4rem]">
                  <div className="absolute z-[10] bottom-[20px] flex flex-col gap-[.2rem] items-start left-[10px]">
                    <h2 className="text-[1.5rem] font-semiBold leading-[1.5rem] tracking-[0.045rem] text-textColor-400">Perfume</h2>
                    <p className="text-[0.875rem] font-normal leading=[1.3125rem] text-textColor-400">GUCCI INTENSE OUD EDP</p>
                    <button className="text-textColor-400 text-[1rem] font-medium leading-[1.5rem] hover:underline">Shop Now</button>
                  </div>
                    <div>
                      <LazyLoadImage src={perfume} effect="blur"/>
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