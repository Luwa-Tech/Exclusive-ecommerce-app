import { useOutletContext } from "react-router-dom";
import { UserContextType } from "../components/Layout";

const useUserStore = () => {
    return useOutletContext<UserContextType>();
}

export default useUserStore