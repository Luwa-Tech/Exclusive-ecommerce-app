import {ImSpinner} from "react-icons/im"

const Loading = () => {
    return (
        <main className="flex justify-center items-center">
            <ImSpinner className="h-7 w-7 animate-spin mt-[8rem] md:mt-[17rem]"/>
        </main>
    )
}

export default Loading