import { NavLink } from "react-router-dom"

const Cancel = () => {
    return (
        <main className="mt-[3rem] mb-[3.5rem] md:mb-[6.5rem]">
        <section className="px-[.4rem] text-center flex flex-col gap-[1.5rem] md:max-w-[50%] md:mx-auto">
            <h1 className="text-[1.1rem] md:text-[1.4rem]">
            Sorry we could not complete your checkout, we are experiencing some issues from our end. please try again later
            </h1>
            <NavLink to="/">
                <button className="bg-secondary-700 text-textColor-400 px-[.8rem] py-[.5rem] rounded-[.2rem] md:hover:opacity-[0.6]">
                    Back to Store
                </button>
            </NavLink>
        </section>
    </main>
    )
}

export default Cancel