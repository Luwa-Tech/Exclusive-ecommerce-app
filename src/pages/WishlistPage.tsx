import { WishListContext } from "../context/WishListContext"
import {useContext, useEffect, useRef} from "react"
import WishListItem from "../components/wishlist/WishListItem"

import Slider from "react-slick"

import useStoreProducts from "../hooks/useStoreProducts"
import Product from "../components/Product"
import ProductSlider from "../components/product-slider/ProductSlider"
import { NavLink } from "react-router-dom"
import usePreventMobileScroll, {CustomEventListenerOptions} from "../hooks/usePreventMobileScroll"


const WishlistPage = () => {
    const { wishList } = useContext(WishListContext)
    const {touchStart, preventTouch} = usePreventMobileScroll()

    const {storeProducts} = useStoreProducts()
    const sliderRef = useRef<Slider | null>(null)


    const prev = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev()
      }
    }

    const next = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext()
      }
    }

    useEffect(() => {
      window.addEventListener("touchstart", touchStart)
      window.addEventListener("touchmove", preventTouch, {passive: false} as CustomEventListenerOptions )

      return () => {
        window.removeEventListener("touchstart", touchStart)
        window.removeEventListener("touchmove", preventTouch, {passive: false} as CustomEventListenerOptions )
      }
    }, [preventTouch, touchStart])


    if(wishList.length === 0) {
        return (
            <main className="mt-[3rem] mb-[2rem] md:mb-[3rem]">
            <section className="px-[.4rem] text-center flex flex-col gap-[1.5rem] md:max-w-[50%] md:mx-auto">
                <h1 className="text-[1.5rem] md:text-[2.5rem]">Your wishlist is currently empty</h1>
                <NavLink to="/">
                    <button className="bg-secondary-700 text-textColor-400 px-[.8rem] py-[.5rem] rounded-[.2rem] uppercase md:hover:opacity-[0.6]">return to shop</button>    
                </NavLink>
            </section>
        </main>
        )
    }

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,             
              arrows: false,
              className: "center",
              centerMode: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              className: "center",
              centerMode: true
            }
          }
        ]
  };


    return (
       <main className="px-4 md:px-0 md:mt-[2rem] md:w-[80%] md:mx-auto mb-[4rem]">
        <section>
            <h2 className="mb-[2rem]">{`Wishlist (${wishList.length})`}</h2>
            <ul className="grid md:grid-cols-6 grid-cols-3 gap-2 md:gap-4">
                {
                    wishList.map(items => {
                        return <WishListItem key={items.id} {...items}/>
                    })
                }
            </ul>
        </section>

        <section className="md:mt-[4rem] mt-[2rem]">
            <ProductSlider sectionCaption="Just For You"  prev={() => prev()} next={() => next()}/>
                <Slider {...settings}>
                    {
                        storeProducts.map(items => {
                            return <Product key={items.id} {...items} />
                        })
                    }
                </Slider>
            </section>

       </main>
    )
}

export default WishlistPage