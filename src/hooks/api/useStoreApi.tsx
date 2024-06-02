import axios from "axios"

export type StoreProductType = {
    _id: string,
    name: string,
    price: number,
    image: string,
    stripeID: string,
    discount: number | null,
    discountPrice: number | null,
    rating: number,
    category: string,
}

const serverURL = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
})

const useStoreApi = () => {

    const getStoreItems = async (): Promise<StoreProductType[]> => {
        const response = await serverURL.get("/products")
        return response.data

    }

    return {
        getStoreItems
    }

}

export default useStoreApi