import { NavLink } from "react-router-dom"

const Success = () => {
    return (
        <main className="mt-[3rem] mb-[3.5rem] md:mb-[6.5rem]">
            <section className="px-[.4rem] text-center flex flex-col gap-[1.5rem] md:max-w-[50%] md:mx-auto">
                <h1 className="text-[1.8rem] md:text-[2.5rem] uppercase">
                    Thank you for patronizing us
                </h1>
                <p className="md:text-[1rem] tex-[.8rem]">We'll email you an order confirmation with details and tracking info</p>
                <NavLink to="/">
                    <button className="bg-secondary-700 text-textColor-400 px-[.8rem] py-[.5rem] rounded-[.2rem] md:hover:opacity-[0.6]">
                        Continue Shopping
                    </button>
                </NavLink>
            </section>
        </main>
    )
}

export default Success