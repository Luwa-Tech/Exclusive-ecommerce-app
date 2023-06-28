
// import { NavLink } from "react-router-dom"
// import { useMediaQuery } from "react-responsive"
import { AiFillApple} from "react-icons/ai"
import { GoArrowRight } from "react-icons/go"

const HeroCarousel = () => {
    return (
                <section className="flex md:gap-[8rem] md:justify-center md:items-center mt-8 bg-textColor-600">
                    <div className="text-left md:w-[25%]">
                        <p className="md:my-4 md:text-[1rem] text-textColor-400 md:leading-[1.5rem] flex items-center gap-[0.5rem]"><AiFillApple size={40}/> iphone 14 series</p>
                        <p className=" md:my-4 md:text-[3rem] md:font-semibold md:leading-[3.75rem] md:tracking-[0.12rem] text-textColor-400 md:flex-wrap">Up to 10% off Voucher</p>
                        <p className="md:text-[1rem] md:font-medium md:leading-[1.5rem] md:flex md:gap-2 md:items-center hover:underline transition-all ease-in-out cursor-pointer text-textColor-400">Shop Now <GoArrowRight size={20} className="md:mt-1"/></p>
                    </div>
                    <div><img src="./src/assets/images/hero_endframe__cvklg0xk3w6e_large 2.png"/></div>
                </section>
    )
}

export default HeroCarousel