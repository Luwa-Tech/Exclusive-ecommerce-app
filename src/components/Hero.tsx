// import { NavLink } from "react-router-dom"
// import { AiFillApple} from "react-icons/ai"
// import { GoArrowRight } from "react-icons/go"
// import { useMedia } from "../hooks/useMedia"

import Slider from "react-slick"

import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

const HeroImages = [
    "./src/assets/images/hero/c-d-x-PDX_a_82obo-unsplash.jpg",
    "./src/assets/images/hero/domino-164_6wVEHfI-unsplash.jpg",
    "./src/assets/images/hero/eniko-kis-KsLPTsYaqIQ-unsplash.jpg",
    "./src/assets/images/hero/giorgio-trovato-K62u25Jk6vo-unsplash.jpg",
    "./src/assets/images/hero/kelly-sikkema-xp-ND7NjWaA-unsplash.jpg",
    "./src/assets/images/hero/rachit-tank-2cFZ_FB08UM-unsplash.jpg"
]

const HeroCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        lazyLoading: true
      };
    return (
        <>
        {/* {isDesktop &&
                <div className="flex gap-[1rem] py-5 md:py-2 px-2 md:gap-[8rem] md:justify-center md:items-center mt-2 md:mt-8 bg-textColor-600">
                    <div className="text-left md:w-[25%]">
                        <p className="mb-1 md:my-4 text-[1rem] md:text-[1rem] text-textColor-400 md:leading-[1.5rem] flex items-center gap-[0.2rem]  md:gap-[0.5rem]"><AiFillApple className="text-[30px] md:text-[40px]"/> iphone 14 series</p>
                        <p className="my-1 text-[1.2rem] md:my-4 md:text-[3rem] md:font-semibold md:leading-[3.75rem] md:tracking-[0.12rem] text-textColor-400 md:flex-wrap">Up to 10% off Voucher</p>
                        <p className="text-[.8rem] md:text-[1rem] md:font-medium md:leading-[1.5rem] flex gap-2 md:items-center hover:underline transition-all ease-in-out cursor-pointer text-textColor-400">Shop Now {isDesktop && <GoArrowRight size={20} className="md:mt-1"/>}</p>
                    </div>
                    <div className="w-[50%] md:w-auto"><img src="./src/assets/images/shop now/hero_endframe__cvklg0xk3w6e_large 2.png"/></div>
                </div>
            } */}

            <Slider {...settings}>
                {
                    HeroImages.map(imageUrl => {
                        return (
                            <div className="h-[16rem] mt-[1.2rem] md:w-[55.75rem] md:h-[21.5rem] hero-div">
                                <img className="hero-image " src={imageUrl} loading="eager" alt="hero image"/>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default HeroCarousel