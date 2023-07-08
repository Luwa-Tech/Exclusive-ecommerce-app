import Slider from "react-slick"
import Product from "../Product"

import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

import useStoreProducts from "../../hooks/useStoreProducts"

const ProductSlider = () => {
  const {storeProducts} = useStoreProducts()
  const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <section className="mt-[3rem] border-2">
        <Slider {...settings}>
          {
            storeProducts.map(item => {
              return (
                <Product {...item} />
              )
            })
          }
        </Slider>
      </section>
    )
}

export default ProductSlider