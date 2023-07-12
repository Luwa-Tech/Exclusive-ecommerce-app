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
        autoplay: false,
      };
    return (
        <>
            <Slider {...settings}>
                {
                    HeroImages.map(imageUrl => {
                        return (
                            <div className="h-[16rem] mt-[1.2rem] md:w-[55.75rem] md:h-[21.5rem] hero-div">
                                <img className="hero-image " src={imageUrl} loading="eager" decoding="async" alt="hero image"/>
                            </div>
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default HeroCarousel