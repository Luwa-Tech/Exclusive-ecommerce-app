import { useEffect } from "react"
import { useLocation } from "react-router"

const ResetScroll = () => {
    const {pathname} = useLocation()

    //reset scroll to top position on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ResetScroll