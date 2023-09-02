import aboutImagePortrait from "../assets/images/about/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"
import iconShopping from "../assets/icons/Icon-Shopping bag.png"
import iconShop from "../assets/icons/icon_shop.png"
import iconSale from "../assets/icons/Icon-Sale.png"
import iconMoneyBag from "../assets/icons/Icon-Moneybag.png"

import { employeeData } from "../data/employeeData"
import EmployeeCard from "../components/EmployeeCard"
import Services from "../components/Services"

import Slider from "react-slick"
import { LazyLoadImage } from "react-lazy-load-image-component"

const About = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1             
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
                dots: false
            }
          }
        ]
  };
    return (
       <main className="mt-[2rem]">
        <section className="flex flex-col-reverse md:flex-row md:gap-[2.5rem] mb-[5rem] gap-[1rem] items-center md:justify-between">
            <article className="pl-[.8rem] pr-[.85rem] md:pl-[5.5rem] md:pr-0 md:w-[50%]">
                <h1 className="text-textColor-600 md:text-[3.375rem] text-[2rem] font-semibold md:leading-[4rem] md:tracking-[.2025rem] mb-[.7rem] md:mb-[1.2rem] text-center md:text-left">Our Story</h1>
                <p className="text-textColor-600 text-[1rem] font-normal md:leading-[1.625rem] text-justify md:text-left  mb-[1rem]">Launched in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.</p>
                <p className="text-textColor-600 text-[1rem] font-normal md:leading-[1.625rem] text-justify md:text-left">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
            </article>
         
                <LazyLoadImage className="w-full h-[23.5rem] md:w-[37rem] md:h-[30rem]" src={aboutImagePortrait} alt="about image" effect="blur"/>
        </section>

        <section className="px-[.55rem] md:px-0 mt-[.7rem] mb-[3rem] md:mb-[5rem] md:mt-[2.4rem] md:w-[90%] md:mx-auto grid grid-cols-2 md:grid-cols-4 md:gap-[2.5rem] gap-[.4rem]">
            <div className="flex flex-col items-center justify-center gap-[.4rem] border-[.1rem] rounded-[.3rem] px-[1.2rem] py-[1.3rem]">
                <div className="bg-secondary-500 px-[.7rem] py-[.7rem] rounded-[1.8rem]">
                    <div className="bg-buttonColor-400 px-[.65rem] py-[.65rem] rounded-[1.4rem]">
                        <img className="w-[1.4rem]" src={iconShop} />
                    </div>
                </div>
                <p className="text-textColor-600 md:text-[2rem] font-bold md:leading-[1.875rem] md:tracking-[0.08rem]">10.5k</p>
                <p className="text-textColor-600 text-[.74rem] md:text-[1rem] font-normal md:leading-[1.5rem]">Active sellers on our site</p>
            </div>

            <div className="flex flex-col items-center justify-center border-[.1rem] gap-[.4rem] rounded-[.3rem] px-[1.2rem] py-[1.3rem]">
                <div className="bg-secondary-500 px-[.7rem] py-[.7rem] rounded-[1.8rem] ">
                    <div className="bg-buttonColor-400 px-[.65rem] py-[.65rem] rounded-[1.4rem]">
                        <img className="w-[1.4rem] filter-image" src={iconSale} />
                    </div>
                </div>
                <p className="text-textColor-600 md:text-[2rem] font-bold md:leading-[1.875rem]  md:tracking-[0.08rem]">33k</p>
                <p className="text-textColor-600 text-[.74rem] md:text-[1rem] font-normal  md:leading-[1.5rem]">Monthly product sales</p>
            </div>

            <div className="flex flex-col items-center justify-center border-[.1rem] gap-[.4rem]  rounded-[.3rem] px-[1.2rem] py-[1.3rem]">
                <div className="bg-secondary-500 px-[.7rem] py-[.7rem] rounded-[1.8rem]">
                    <div className="bg-buttonColor-400 px-[.65rem] py-[.65rem] rounded-[1.4rem]">
                        <img className="w-[1.4rem]" src={iconShopping} />
                    </div>
                </div>
                <p className="text-textColor-600 md:text-[2rem] font-bold md:leading-[1.875rem] md:tracking-[0.08rem]">45.5k</p>
                <p className="text-textColor-600 text-[.74rem] md:text-[1rem] font-normal md:leading-[1.5rem]">Active customers on our site</p>
            </div>

            <div className="flex flex-col items-center justify-center border-[.1rem] gap-[.4rem] rounded-[.3rem] px-[1.2rem] py-[1.3rem]">
                <div className="bg-secondary-500 px-[.74rem] py-[.7rem] rounded-[1.8rem]">
                    <div className="bg-buttonColor-400 px-[.65rem] py-[.65rem] rounded-[1.4rem]">
                        <img className="w-[1.4rem]" src={iconMoneyBag}  />
                    </div>
                </div>
                <p className="text-textColor-600 md:text-[2rem] font-bold md:leading-[1.875rem] md:tracking-[0.08rem]">25k</p>
                <p className="text-textColor-600 text-[.74rem] md:text-[1rem] font-normal md:leading-[1.5rem]">Annual gross  sale on our site</p>
            </div>
        </section>

        <section className="md:w-[90%] md:mx-auto mb-[3rem] md:mb-[6rem] pl-[.77rem] md:pl-0"> 
            <Slider {...settings}>
                {
                    employeeData.map(employee => {
                        return (
                            <EmployeeCard key={employee.id} {...employee}/>
                        )
                    })
                }
            </Slider>
        </section>

        <section className="flex flex-col gap-8 md:gap-0 md:flex-row justify-between md:w-[70%] md:mx-auto mb-[4rem] md:mb-[6rem]">
            <Services />
        </section>
       </main>
    )
}

export default About