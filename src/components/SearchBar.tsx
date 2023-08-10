import { CiSearch } from "react-icons/ci"

const SearchBar = () => {
    return (
        <div className="mt-[0.3rem] md:mt-0 px-2 md:px-0 w-full md:w-auto" > 
        <section className="flex items-center justify-between px-[0.4rem] md:py-1 cursor-pointer md:column w-100% md:items-center md:gap-[1rem] bg-secondary-500  md:pb-[0.2rem] rounded-[5px] w-[100%] md:w-auto">
            <input className="text-[.95rem] w-[100%] md:w-auto leading-[1.125rem] md:py-1 py-2 bg-transparent outline-none  px-[.75rem]" type="text" placeholder="What are you looking for?"/>
            <CiSearch  className="w-[1.4rem] h-[1.4rem] md:w-[1.1rem] md:h-[1.1rem] text-buttonColor-400"/>
        </section>
        </div> 
    )
}

export default SearchBar