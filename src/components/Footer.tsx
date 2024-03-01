import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineSend} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"
import { NavLink, useLocation } from "react-router-dom"

import { LazyLoadImage } from "react-lazy-load-image-component"

import qrCode from "../assets/icons/Qr Code.png"
import googlePlayStore from "../assets/icons/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
import appStore from "../assets/icons/AppStore.png"


const RoutesWithoutFooter = ["/signin", "/signup"]

const Footer = () => {
    const {pathname} = useLocation()

    if (RoutesWithoutFooter.some((item) => pathname.includes(item))) {
        return null
    }

    return (
        <section className="bg-buttonColor-400 pt-[1.5rem] pb-[1.2rem] px-[.8rem] md:px-0 md:pt-[5rem] md:pb-[1.5rem]">
            <div className="md:w-[90%] md:mx-auto md:flex md:justify-between">
                <section className="mb-[1.3rem] md:mb-0">
                    <h2 className="text-[1.5rem] mb-[1rem] font-bold leading-[1.5rem] tracking-[0.045rem] text-textColor-400">Exclusive</h2>
                    <p className="text-[1.1rem] md:text-[1.25rem] font-medium leading-[1.75rem] text-textColor-400 mb-[.6rem]">Subscribe</p>
                    <p className="text-textColor-400 text-[1rem] font-normal leading-[1.5rem] mb-[.3rem]">Get 10% off your first order</p>
                    <div className="border-[1.5px] text-textColor-400 flex items-center py-[.4rem] px-[.6rem] gap-[.4rem] md:gap-0 rounded-[0.25rem] max-w-[65%] md:max-w-[100%]">
                        <input className="bg-transparent w-full outline-none" type="text" placeholder="Enter your email"/>
                        <div className="cursor-pointer">
                        <AiOutlineSend />
                        </div>
                    </div>
                </section>

                <div className="flex flex-row md:gap-16">
                    <div className="flex flex-col md:flex-row gap-4">
                        <section className="mb-[1rem] md:mb-0">
                            <h2 className="text-[1.1rem] md:text-[1.25rem] mb-[.3rem] md:mb-[1rem] font-medium leading-[1.75rem] text-textColor-400">Support</h2>
                            <p className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem] w-[75%] md:w-[80%]">No 6, Hayin Na-iya igabi local government Kaduna, Nigeria</p>
                            <p className="text-textColor-400 text-[1rem] font-normal leading-[1.5rem]">exclusive@gmail.com</p>
                            <p className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem]">09035804351</p>
                        </section>
                        <section className="mb-[1rem] md:mb-0">
                            <h2 className="text-[1.1rem] md:text-[1.25rem] mb-[.3rem] md:mb-[1rem] font-medium leading-[1.75rem] text-textColor-400">Account</h2>
                            <div className="flex flex-col gap-1">
                                <NavLink to="/cart" className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem] hover:underline">Cart</NavLink>
                                <NavLink to="/wishlist" className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem] hover:underline">Wishlist</NavLink>
                                <NavLink to="/" className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem] hover:underline">Shop</NavLink>
                            </div>
                        </section>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                        <section className="mb-[1rem] md:mb-0">
                            <h2 className="text-[1.1rem] md:text-[1.25rem] mb-[.3rem] md:mb-[1rem] font-medium leading-[1.75rem] text-textColor-400">Quick Link</h2>
                            <p className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem]">Privacy Policy</p>
                            <p className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem]">Terms Of Use</p>
                            <p className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem]">FAQ</p>
                            <p className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem]">Contact</p>
                        </section>
                        <section>
                            <h2 className="md:text-[1.25rem] mb-[.3rem] md:mb-[1rem] font-medium leading-[1.75rem] text-textColor-400">Download App</h2>
                            <p className="text-[0.75rem] font-medium leading-[1.125rem] text-textColor-400">Save $3 with App New User Only</p>
                            <div className="flex gap-1 mt-[.4rem] items-center">
                                <LazyLoadImage src={qrCode} className="h-[5rem] w-[5rem]" />
                                <div>
                                    <LazyLoadImage src={googlePlayStore} className="h-[2rem] w-[6.5rem]"/>
                                    <LazyLoadImage src={appStore} className="h-[2.2rem] w-[6.6rem]"/>
                                </div>
                            </div>
                            <div className="text-textColor-400 flex gap-[1.7rem] items-center mt-[.7rem]">
                                <FaFacebookF />
                                <AiOutlineTwitter />
                                <AiOutlineInstagram />
                                <BiLogoLinkedin />
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer