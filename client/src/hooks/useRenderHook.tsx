import { useMediaQuery } from "react-responsive"

const useRenderHook = () => {
    const isMobile = useMediaQuery({ maxWidth: 639 })
    const isDesktop = useMediaQuery({ minWidth: 640 })

    return {isMobile, isDesktop}
}

export default useRenderHook