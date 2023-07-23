import Slider from "react-slick"

import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

// import image1 from "../src/assets/images/hero/c-d-x-PDX_a_82obo-unsplash.jpg"
// import image2 from "../src/assets/images/hero/domino-164_6wVEHfI-unsplash.jpg"
// import image3 from "../src/assets/images/hero/eniko-kis-KsLPTsYaqIQ-unsplash.jpg"
// import image4 from "../src/assets/images/hero/giorgio-trovato-K62u25Jk6vo-unsplash.jpg"
// import image5 from "../src/assets/images/hero/kelly-sikkema-xp-ND7NjWaA-unsplash.jpg"
// import image6 from "../src/assets/images/hero/rachit-tank-2cFZ_FB08UM-unsplash.jpg"

// const HeroImages = [
//     {
//         "id": 1,
//         "image": image1
//     },
//     {
//         "id": 2,
//         "image": image2
//     },
//     {
//         "id": 3,
//         "image": image3
//     },
//     {
//         "id": 4,
//         "image": image4
//     },
//     {
//         "id": 5,
//         "image": image5
//     },
//     {
//         "id": 6,
//         "image": image6
//     },
// ]

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
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
      };
    return (
        <>
            <Slider {...settings}>
                {
                    HeroImages.map(imageUrl => {
                        return (
                            <div key={imageUrl} className="h-[16rem] mt-[1.2rem] md:w-[55.75rem] md:h-[21.5rem] hero-div">
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