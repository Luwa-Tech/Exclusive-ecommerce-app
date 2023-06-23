import { CiSearch } from "react-icons/ci"

const SearchBar = () => {
    return (
        <div className="mt-2 md:mt-0 px-2 md:px-0"> 
        <section className="flex items-center justify-between px-[0.4rem] py-2 md:column w-100% md:items-center md:gap-[2.125rem] bg-secondary-500 md:pt-[0.4375rem] md:pr-[0.75rem] md:pb-[0.4375rem] md:pl-[1.25rem] rounded-[5px]">
            <input className="text-[.95rem] leading-[1.125rem] bg-transparent px-[.75rem]" type="text" placeholder="What are you looking for?"/>
            <CiSearch  className="w-[1.4rem] h-[1.4rem] md:w-[1.1rem] md:h-[1.1rem] text-buttonColor-400"/>
        </section>
        </div> 
    )
}

export default SearchBar