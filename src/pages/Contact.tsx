import iconMail from "../assets/icons/icons-mail.png"
import iconPhone from "../assets/icons/icons-phone.png"

const Contact = () => {

    const submitForm = (event: { preventDefault: () => void }) => {
        event.preventDefault()
    }
    return (
        <main>
            <div className="mt-[2rem] mb-[4rem] md:w-[80%] md:mx-auto flex flex-col md:flex-row gap-8 md:gap-[5rem] items-start">
                <section className="px-4">
                    <div className="border-b-[0.1rem] flex flex-col gap-[.3rem] md:gap-4 pb-[3rem]">
                        <div className="flex items-center gap-4">
                            <img src={iconPhone} />
                            <h2 className="text-[1rem] font-medium leading-[1.5rem]">Call To Us</h2>
                        </div>
                        <p className="text-[0.875rem] font-normal leading-[1.3125rem]">We are available 24/7, 7 days a week.</p>
                        <p className="text-[0.875rem] font-normal leading-[1.3125rem]">Phone: +8801611112222</p>
                    </div>

                    <div className="mt-[1.5rem] flex flex-col gap-[.3rem] md:gap-4">
                        <div className="flex items-center gap-4">
                            <img src={iconMail} />
                            <h2 className="text-[1rem] font-medium leading-[1.5rem]">Write To Us</h2>
                        </div>
                        <p className="text-[0.875rem] font-normal leading-[1.3125rem] w-[80%] md:w-auto">Fill out our form and we will contact you within 24 hours.</p>
                        <p className="text-[0.875rem] font-normal leading-[1.3125rem]">Emails: customer@exclusive.com</p>
                        <p className="text-[0.875rem] font-normal leading-[1.3125rem]">Emails: support@exclusive.com</p>
                    </div>
                    
                </section>

                <section className="w-[100%] md:w-auto">
                    <form onSubmit={submitForm} className="flex flex-col relative px-[.6rem] md:px-0">
                            <div className="flex flex-col md:flex-row gap-4 md:justify-between">
                                <input className="bg-secondary-500 px-[.7rem] md:px-[.5rem] py-[.5rem] md:py-[.25rem] outline-none md:w-[16rem]" type="text" placeholder="Your Name" required/>
                                <input className="bg-secondary-500 px-[.7rem] md:px-[.5rem] md:py-[.25rem] py-[.5rem] outline-none  md:w-[16rem]" type="text" placeholder="Your Email" required/>
                                <input className="bg-secondary-500 px-[.7rem] py-[.5rem] md:py-[.25rem] outline-none  md:w-[16rem]" type="text" placeholder="Your Phone" required/>
                            </div>
                            <textarea className="bg-secondary-500 md:w-full md:h-[12.935rem] h-[10rem] resize-none mt-[1rem] outline-none px-[.7rem] py-[.6rem]" placeholder="Your Message"/>
                            <button className="bg-secondary-700 md:px-[.8rem] px-[.1rem] mt-[1rem] md:mt-0 rounded-[.2rem] text-textColor-400 w-[8rem] md:w-[10rem] py-[.4rem] md:py-[.6rem] md:absolute md:right-0 md:bottom-[-70px] hover:opacity-[0.7]">Send Message</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Contact