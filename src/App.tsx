import {
    Route, 
    BrowserRouter,
    Routes
} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import PageNotFound from "./pages/404"
import CartPage from "./pages/CartPage"
import WishlistPage from "./pages/WishlistPage"
import ProductDetail from "./pages/ProductDetail"
import SeeAllProductsPage from "./pages/SeeAllProductsPage"
import Success from "./pages/Success"
import Cancel from "./pages/Cancel"
import StoreProductsProvider from "./context/StoreContext"
import { CartContextProvider } from "./context/CartContext"
import { WishListContextProvider } from "./context/WishListContext"
// import ResetScroll from "./components/ResetScroll"


const App = () => {

    // const router = createBrowserRouter(
    //     createRoutesFromElements(
            // <Route path="/" element={<Layout />}>
            //     <Route index element={<Home />} />
            //     <Route path="/:id" element={<ProductDetail />} />
            //     <Route path="/contact" element={<Contact />} />
            //     <Route path="/about" element={<About />} />
            //     <Route path="/cart" element={<CartPage />} />
            //     <Route path="/cart/success" element={<Success />} />
            //     <Route path="/cart/cancel" element={<Cancel />} />
            //     <Route path="/wishlist" element={<WishlistPage />} />
            //     <Route path="/wishlist/:id" element={<ProductDetail/>} />
            //     <Route path="/allProducts" element={<SeeAllProductsPage/>} />
            //     <Route path="/allProducts/:id" element={<ProductDetail/>} />

                

            //     <Route path="*" element={<PageNotFound />} />
            // </Route>
    // ))
    return (
        <StoreProductsProvider>
            <CartContextProvider>
                <WishListContextProvider>
                    <BrowserRouter>
                            <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<Home />} />
                                <Route path="/:id" element={<ProductDetail />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/cart/success" element={<Success />} />
                                <Route path="/cart/cancel" element={<Cancel />} />
                                <Route path="/wishlist" element={<WishlistPage />} />
                                <Route path="/wishlist/:id" element={<ProductDetail/>} />
                                <Route path="/allProducts" element={<SeeAllProductsPage/>} />
                                <Route path="/allProducts/:id" element={<ProductDetail/>} />

                            
                                <Route path="*" element={<PageNotFound />} />
                            </Route>
                            
                            </Routes>
                    </BrowserRouter>
                    {/* <RouterProvider router={router}/> */}
                </WishListContextProvider>
            </CartContextProvider>
        </StoreProductsProvider>
    )
}

export default App