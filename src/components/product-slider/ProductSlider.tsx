import Slider from "react-slick"
import Product from "../Product"


import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"

import useStoreProducts from "../../hooks/useStoreProducts"

const ProductSlider = () => {
  const {storeProducts} = useStoreProducts()
  const flashSalesProducts = storeProducts.filter(item => item.discount !== "")

  // const SampleNextArrow = (props: { onClick: any }) => {
  //   const { onClick } = props;
  //   return (
      // <div className=" md:px-[.2rem] md:py-[.2rem] md:rounded-[1rem] bg-secondary-500" onClick={onClick}>
      //     <BsChevronRight />
      // </div>
  //   );
  // }
  
  // const SamplePrevArrow = (props: { onClick: any }) => {
  //   const { onClick } = props;
  //   return (
      // <span className=" classname md:px-[.2rem] md:ml-[10rem] md:py-[.2rem] md:rounded-[1rem] bg-secondary-500" onClick={onClick}>
      // <BsChevronLeft />
      // </span>
  //   );
  // }

  const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        // nextArrow: <SampleNextArrow onClick={undefined} />,
        // prevArrow: <SamplePrevArrow onClick={undefined} />,
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
              dots: false,
              arrows: false

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