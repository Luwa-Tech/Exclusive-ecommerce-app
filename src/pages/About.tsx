import aboutImagePortrait from "..first:/assets/images/about/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png"

const About = () => {
    return (
       <main className="mt-[2rem]">
        <section className="flex flex-col-reverse md:flex-row md:gap-[2.5rem] gap-[1rem] items-center">
            <article className="pl-[.8rem] pr-[.85rem] md:pl-[5.5rem] md:pr-0 md:w-[50%]">
                <h1 className="text-textColor-600 md:text-[3.375rem] text-[2rem] font-semibold md:leading-[4rem] md:tracking-[.2025rem] mb-[.7rem] md:mb-[1.2rem] text-center md:text-left">Our Story</h1>
                <p className="text-textColor-600 text-[1rem] font-normal md:leading-[1.625rem] text-justify md:text-left  mb-[1rem]">Launched in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.</p>
                <p className="text-textColor-600 text-[1rem] font-normal md:leading-[1.625rem] text-justify md:text-left">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
            </article>
            <div>
                <img src={aboutImagePortrait} alt="about image"/>
            </div>
        </section>
       </main>
    )
}

export default About