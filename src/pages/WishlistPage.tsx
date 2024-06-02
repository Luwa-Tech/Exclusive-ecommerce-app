import { useEffect, useRef } from "react"
import Slider from "react-slick"

import useStoreProducts from "../hooks/useStoreProducts"
import Product from "../components/Product"
import ProductSlider from "../components/product-slider/ProductSlider"
import { NavLink } from "react-router-dom"
import usePreventMobileScroll, { CustomEventListenerOptions } from "../hooks/usePreventMobileScroll"
import WishListItem from "../components/wishlist/WishListItem"
import { ImSpinner } from "react-icons/im"
import useUserStore from "../hooks/useUserStore"


const WishlistPage = () => {
  const { wishlist, isWishlistLoading } = useUserStore()

  const { touchStart, preventTouch } = usePreventMobileScroll()

  const { storeProducts } = useStoreProducts()
  const sliderRef = useRef<Slider | null>(null)


  const GoToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const GoToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  if (wishlist === undefined) {
    return (
      <main className="md:flex md:justify-center md:items-center px-[.6rem] md:px-0">
        <h1 className="md:my-[10rem] my-[8rem] text-[1.2rem] md:text-[2.3rem]">We are experiencing some issues lately, but we'll fix it soon</h1>
      </main>
    )
  }

  useEffect(() => {
    window.addEventListener("touchstart", touchStart)
    window.addEventListener("touchmove", preventTouch, { passive: false } as CustomEventListenerOptions)

    return () => {
      window.removeEventListener("touchstart", touchStart)
      window.removeEventListener("touchmove", preventTouch, { passive: false } as CustomEventListenerOptions)
    }
  }, [preventTouch, touchStart])

  if (isWishlistLoading) {
    return (
      <main className="flex justify-center items-center my-[5rem]">
        <ImSpinner className="h-10 w-10 animate-spin" />
      </main>
    )
  }

  if (wishlist?.length === 0) {
    return (
      <main className="mt-[3.5rem] mb-[4rem] md:mb-[6.5rem]">
        <section className="px-[.4rem] text-center flex flex-col gap-[1.5rem] md:max-w-[50%] md:mx-auto">
          <h1 className="text-[1.4rem] md:text-[2.5rem]">Your wishlist is currently empty</h1>
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
        <h2 className="mb-[2rem]">{`Wishlist (${wishlist?.length})`}</h2>
        <ul className="grid md:grid-cols-6 grid-cols-3 gap-2 md:gap-4">
          {
            wishlist?.map(items => {
              return <WishListItem key={items.id} {...items} />
            })
          }
        </ul>
      </section>

      <section className="md:mt-[4rem] mt-[2rem]">
        <ProductSlider sectionCaption="Just For You" prev={() => GoToPrev()} next={() => GoToNext()} />
        <Slider ref={sliderRef} {...settings}>
          {
            storeProducts?.map(items => {
              return <Product key={items._id} {...items} />
            })
          }
        </Slider>
      </section>

    </main>
  )
}

export default WishlistPage