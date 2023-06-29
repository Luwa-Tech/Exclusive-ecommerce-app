// import { NavLink } from "react-router-dom"
import { AiFillApple} from "react-icons/ai"
import { GoArrowRight } from "react-icons/go"
import { useMedia } from "../hooks/UseMedia"

const HeroCarousel = () => {
    const {isDesktop} = useMedia()
    return (
        <>
        {isDesktop &&
                <section className="flex gap-[1rem] py-5 md:py-2 px-2 md:gap-[8rem] md:justify-center md:items-center mt-2 md:mt-8 bg-textColor-600">
                    <div className="text-left md:w-[25%]">
                        <p className="mb-1 md:my-4 text-[1rem] md:text-[1rem] text-textColor-400 md:leading-[1.5rem] flex items-center gap-[0.2rem]  md:gap-[0.5rem]"><AiFillApple className="text-[30px] md:text-[40px]"/> iphone 14 series</p>
                        <p className="my-1 text-[1.2rem] md:my-4 md:text-[3rem] md:font-semibold md:leading-[3.75rem] md:tracking-[0.12rem] text-textColor-400 md:flex-wrap">Up to 10% off Voucher</p>
                        <p className="text-[.8rem] md:text-[1rem] md:font-medium md:leading-[1.5rem] flex gap-2 md:items-center hover:underline transition-all ease-in-out cursor-pointer text-textColor-400">Shop Now {isDesktop && <GoArrowRight size={20} className="md:mt-1"/>}</p>
                    </div>
                    <div className="w-[50%] md:w-auto"><img src="./src/assets/images/hero_endframe__cvklg0xk3w6e_large 2.png"/></div>
                </section>
            }
        </>
    )
}

export default HeroCarousel