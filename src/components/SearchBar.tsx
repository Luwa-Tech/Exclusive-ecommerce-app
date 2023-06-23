import { CiSearch } from "react-icons/ci"

const SearchBar = () => {
    return (
        <section className="flex column justify-center items-center gap-[2.125rem] bg-secondary-500 pt-[0.4375rem] pr-[0.75rem] pb-[0.4375rem] pl-[1.25rem] rounded-[5px]">
            <input className="text-[0.75rem] leading-[1.125rem] bg-transparent px-[.75rem]" type="text" placeholder="What are you looking for?"/>
            <CiSearch />
        </section>
    )
}

export default SearchBar