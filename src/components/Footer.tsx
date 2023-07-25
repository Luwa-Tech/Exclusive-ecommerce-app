import {FaFacebookF} from "react-icons/fa"
import {AiOutlineTwitter, AiOutlineInstagram, AiOutlineSend} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"

import qrCode from "../assets/icons/Qr Code.png"
import googlePlayStore from "../assets/icons/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
import appStore from "../assets/icons/AppStore.png"

const Footer = () => {
    return (
        <section className="bg-buttonColor-400 pt-[1.5rem] pb-[1.2rem] pl-[.8rem] md:pl-0 md:pt-[5rem] md:pb-[1.5rem]">
            <div className="md:w-[90%] md:mx-auto md:flex md:justify-between">
                <section className="mb-[1rem] md:mb-0">
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

                <section className="mb-[1rem] md:mb-0">
                    <h2 className="text-[1.1rem] md:text-[1.25rem] mb-[.3rem] md:mb-[1rem] font-medium leading-[1.75rem] text-textColor-400">Support</h2>
                    <p className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem] w-[50%]md:w-[53%]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className="text-textColor-400 text-[1rem] font-normal leading-[1.5rem]">exclusive@gmail.com</p>
                    <p className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem]">+88015-88888-9999</p>
                </section>

                <section className="mb-[1rem] md:mb-0">
                    <h2 className="text-[1.1rem] md:text-[1.25rem] mb-[.3rem] md:mb-[1rem] font-medium leading-[1.75rem] text-textColor-400">Account</h2>
                    <p className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem]">Cart</p>
                    <p className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem]">Wishlist</p>
                    <p className="text-textColor-400 text-[.95rem] md:text-[1rem] font-normal leading-[1.5rem]">Shop</p>
                </section>

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
                        <img src={qrCode} />
                        <div>
                            <img src={googlePlayStore} />
                            <img src={appStore} />
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
        </section>
    )
}

export default Footer