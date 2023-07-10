import Slider from "react-slick"
import Product from "../Product"

import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

import useStoreProducts from "../../hooks/useStoreProducts"

const ProductSlider = () => {
  const {storeProducts} = useStoreProducts()
  const flashSalesProducts = storeProducts.filter(item => item.discount !== "")
  console.log(flashSalesProducts)
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
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
          
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: false

            }
          }
        ]
      };
    return (
        <Slider {...settings}>
          {
            flashSalesProducts.map(item => {

              return (
                <Product {...item} />
              )
            })
          }
        </Slider>
    )
}

export default ProductSlider