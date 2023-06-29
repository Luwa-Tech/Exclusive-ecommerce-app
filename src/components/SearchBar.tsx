import { CiSearch } from "react-icons/ci"
import Categories from "./Categories"
import { useMedia } from "../hooks/UseMedia"

const SearchBar = () => {
    const {isDesktop} = useMedia()
    return (
        <div className="mt-2 md:mt-0 px-2 md:px-0"> 
        <section className="flex items-center justify-between px-[0.4rem] md:py-2 cursor-pointer md:column w-100% md:items-center md:gap-[1rem] bg-secondary-500 md:pt-[0.4375rem] md:pr-[0.75rem] md:pb-[0.4375rem] md:pl-[1.25rem] rounded-[5px]">
            {isDesktop && <Categories />}
            <input className="text-[.95rem] leading-[1.125rem] py-3 bg-transparent outline-none px-[.75rem]" type="text" placeholder="What are you looking for?"/>
            <CiSearch  className="w-[1.4rem] h-[1.4rem] md:w-[1.1rem] md:h-[1.1rem] text-buttonColor-400"/>
        </section>
        </div> 
    )
}

export default SearchBar