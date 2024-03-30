import { useState } from "react"

const useAuth = () => {
    const [isUser, setIsUser] = useState<boolean>(false)

    return {
        isUser,
        setIsUser
    }
}

export default useAuth