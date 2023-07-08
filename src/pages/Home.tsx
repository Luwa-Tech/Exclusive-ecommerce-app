import Hero from "../components/Hero"
import ProductSlider from "../components/product-slider/ProductSlider"


const Home = () => {

    return (
        <main>
            <section>
            <Hero/>
            </section>
            <section >
            <ProductSlider />
            </section>
        </main>
    )
}

export default Home