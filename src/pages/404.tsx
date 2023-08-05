import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <main>
            <section className="flex justify-center items-center flex-col mt-[4rem] mb-[4rem] md:mt-[6rem] md:mb-[6rem] gap-8">
                <h1 className="text-textColor-600 text-[3rem] md:text-[6.875rem] font-medium md:leading-[7.1875rem] md:tracking-[0.20625rem]">
                    404 Not Found
                </h1>
                <p className="md:text-[1rem] px-[2rem] md:px-0 font-normal md:leading-[1.5rem] text-textColor-600 justify-center">You can search for the page you want here or return to the homepage</p>
                <Link to="/" className="decoration-none text-textColor-400 rounded-[0.25rem] bg-secondary-700 px-[1.5rem] md:px-[3rem] py-[.8rem] md:py-[1rem]">Back to Homepage</Link>
            </section>
        </main>
    )
}

export default PageNotFound