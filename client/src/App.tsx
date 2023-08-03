import {
    Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider
} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import PageNotFound from "./pages/404"
import CartPage from "./pages/CartPage"
import ProductDetail from "./pages/ProductDetail"
import StoreProductsProvider from "./context/StoreContext"
import { CartContextProvider } from "./context/CartContext"
import { WishListContextProvider } from "./context/WishListContext"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path=":id" element={<ProductDetail />} />

                <Route path="*" element={<PageNotFound />} />
            </Route>
    ))
    return (
        <StoreProductsProvider>
            <CartContextProvider>
                <WishListContextProvider>
                    <RouterProvider router={router}/>
                </WishListContextProvider>
            </CartContextProvider>
        </StoreProductsProvider>
    )
}

export default App