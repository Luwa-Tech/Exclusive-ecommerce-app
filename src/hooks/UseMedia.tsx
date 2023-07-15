import { useMediaQuery } from "react-responsive"

const useMedia = () => {
    const isMobile = useMediaQuery({ maxWidth: 639 })
    const isDesktop = useMediaQuery({ minWidth: 640 })

    return {isMobile, isDesktop}
}

export default useMedia