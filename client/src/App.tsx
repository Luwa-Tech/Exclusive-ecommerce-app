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
import StoreProductsProvider from "./context/StoreContext"

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />

                <Route path="*" element={<PageNotFound />} />
            </Route>
    ))
    return (
        <StoreProductsProvider>
            <RouterProvider router={router}/>
        </StoreProductsProvider>
    )
}

export default App