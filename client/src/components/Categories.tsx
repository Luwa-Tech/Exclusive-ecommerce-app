import customerService from "../assets/icons/Icon-Customer service.png"
import deliveryTruck from "../assets/icons/icon-delivery.png"
import secure from "../assets/icons/Icon-secure.png"

const Services = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center">
            <div className="bg-secondary-500 px-[.7rem] py-[.7rem] rounded-[1.8rem]">
                <div className="bg-buttonColor-400 px-[.65rem] py-[.65rem] rounded-[1.4rem]">
                    <img className="w-[1.4rem]" src={deliveryTruck} />
                </div>
            </div>
            <p className="text-[.8rem] md:text-[1.25rem] font-semibold leading-[1.75rem] uppercase text-textColor-600">free and fast delivery</p>
            <p className="text-[.75rem] md:text-[0.875rem] font-normal leading-[1.3125rem] selection:text-textColor-600">Free delivery for all orders over $140</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <div className="bg-secondary-500 px-[.7rem] py-[.7rem] rounded-[1.8rem]">
                <div className="bg-buttonColor-400 px-[.65rem] py-[.65rem] rounded-[1.4rem]">
                    <img className="w-[1.4rem]" src={customerService} />
                </div>
            </div>
            <p className="text-[.8rem] md:text-[1.25rem] font-semibold leading-[1.75rem] uppercase text-textColor-600">24/7 customer service</p>
            <p className="text-[.75rem] md:text-[0.875rem] font-normal leading-[1.3125rem] selection:text-textColor-600">Friendly 24/7 customer support</p>
        </div>

        <div className="flex flex-col items-center justify-center">
            <div className="bg-secondary-500 px-[.7rem] py-[.7rem] rounded-[1.8rem]">
                <div className="bg-buttonColor-400 px-[.65rem] py-[.65rem] rounded-[1.4rem]">
                    <img className="w-[1.4rem]" src={secure} />
                </div>
            </div>
            <p className="text-[.8rem] md:text-[1.25rem] font-semibold leading-[1.75rem] uppercase text-textColor-600">money back guarantee</p>
            <p className="text-[.75rem] md:text-[0.875rem] font-normal leading-[1.3125rem] selection:text-textColor-600">Refunds are made within 30 days</p>
        </div>
        </>
    )
}

export default Services