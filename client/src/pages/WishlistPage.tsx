import { WishListContext } from "../context/WishListContext"
import {useContext} from "react"
import WishListItem from "../components/wishlist/WishListItem"

const WishlistPage = () => {
    const { wishList } = useContext(WishListContext)

    if(wishList.length === 0) {
        return (
            <h1>wishList is empty</h1>
        )
    }

    return (
       <main className="px-4 md:px-0 md:mt-[2rem] md:w-[80%] md:mx-auto mb-[4rem]">
        <section>
            <h2 className="mb-[2rem]">{`Wishlist (${wishList.length})`}</h2>
            <ul className="grid md:grid-cols-6 grid-cols-3 gap-2 md:gap-4">
                {
                    wishList.map(items => {
                        return <WishListItem key={items.id} {...items}/>
                    })
                }
            </ul>
        </section>

       </main>
    )
}

export default WishlistPage