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

const useStoreApi = () => {

    const getStoreItems = async (): Promise<StoreProductType[]> => {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_PROD_URL}/products`)
        return response.data
    }

    return {
        getStoreItems
    }

}

export default useStoreApi