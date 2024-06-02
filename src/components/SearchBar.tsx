import { CiSearch } from "react-icons/ci"
// import useStoreProducts from "../hooks/useStoreProducts"
import { useState } from "react"
import { useNavigate } from "react-router"

const SearchBar = () => {
    // const {storeProducts} = useStoreProducts()
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value
        setSearchTerm(term)
    }

    // const validateSearchTerm = storeProducts?.some((product) => {
    //     return product.name.toLowerCase().includes(searchTerm.toLowerCase())
    // })

    const handleSearchSubmit = (event: React.FormEvent) => {
        event?.preventDefault()
        navigate(`/results?query=${searchTerm}`)
        setSearchTerm("")
    }
    return (
        <div className="mt-[0.3rem] mb-[.5rem] md:mb-0 md:mt-0 px-2 md:px-0 w-full md:w-auto relative" > 
        <form onSubmit={handleSearchSubmit} className="flex items-center justify-between  md:px-0 md:py-0 cursor-pointer md:column w-100% md:items-center md:gap-[1rem] bg-secondary-500  md:pb-[0.2rem] rounded-[5px] w-[100%] md:w-auto">
            <input className="text-[.95rem] w-[100%] md:w-auto leading-[1.125rem] py-2 bg-transparent outline-none  px-[.75rem]" type="text" placeholder="E.g: gamepad.." value={searchTerm} onChange={handleSearch}/>
            <button disabled={searchTerm === ""} className={`px-4 py-2 bg-secondary-700 hover:bg-opacity-[0.7] rounded-r-[5px] ${searchTerm === "" ? "bg-opacity-[0.7]": ""} cursor-pointer`}>
            <CiSearch  className="w-[1.4rem] h-[1.4rem] md:w-[1.2rem] md:h-[1.2rem] text-primary-500"/>
            </button>
        </form>
        {/* {
            validateSearchTerm === false && <p className="bg-secondary-500 py-2 pl-2 z-[10] rounded-[5px] text-[.95rem] absolute bottom-[-43px] right-[7px] left-[7px] md:right-0 md:left-0">results not found</p>
        } */}
        </div> 
    )
}

export default SearchBar