import {ImSpinner} from "react-icons/im"


const Loading = () => {
    return (
        <main className="flex justify-center items-center">
            <ImSpinner className="h-10 w-10 animate-spin mt-[8rem] md:mt-[17rem]"/>
        </main>
    )
}

export default Loading