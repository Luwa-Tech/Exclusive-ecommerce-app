import {AiOutlineTwitter, AiOutlineInstagram} from "react-icons/ai"
import {BiLogoLinkedin} from "react-icons/bi"

type EmployeeCardType = {
    id: number,
    name: string,
    image: string,
    role: string
}

const EmployeeCard = (props: EmployeeCardType) => {
    return (
        <div className="w-[8rem] md:w-[23.125rem]">
            <div className="bg-secondary-500 px-[1.5rem] py-[2.4rem] flex items-center w-[9rem] h-[13rem] md:w-auto md:h-auto justify-center mb-[1rem]"> 
            <img className="md:w-[18.375rem] md:h-[24.8125rem] object-contain" src={props.image} alt="product image" />
            </div>
           <div className="text-textColor-600">
                <h2 className="text-[.8rem] md:text-[2rem] font-medium md:leading-[1.875rem] md:tracking-[0.08rem] mb-[.4rem]">{props.name}</h2>
                <p className="text-[.6rem] md:text-[1rem] font-normal md:leading-[1.5rem] mb-[.4rem]">{props.role}</p>
                <div className="flex items-center gap-4">
                    <AiOutlineTwitter />
                    <AiOutlineInstagram />
                    <BiLogoLinkedin />
                </div>
           </div>
        </div>
    )
}

export default EmployeeCard