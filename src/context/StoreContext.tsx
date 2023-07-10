import { createContext, ReactElement, useState } from "react";


export type StoreProductType = {
    "id": number,
    "name": string,
    "price": number,
    "discount": string,
    "discountPrice": string,
    "image": string,
    "rating": number,
    "category": string 
}

const initState: StoreProductType[] = [
        {
            "id": 1,
            "name": "HAVIT HV-G92 Gamepad",
            "price": 160,
            "discount": "-30",
            "discountPrice": "120",
            "image": "./src/assets/images/store-images/g92-2-500x500 1.png",
            "rating": 5.0,
            "category": ""
        },
        {
            "id": 2,
            "name": "AK 900 Wired Keyboard",
            "price": 1160,
            "discount": "-35",
            "discountPrice": "960",
            "image": "./src/assets/images/store-images/ak-900-01-500x500 1.png",
            "rating": 4.0,
            "category": ""
        },
        {
            "id": 3,
            "name": "IPS LCD Gaming Monitor",
            "price": 400,
            "discount": "-30",
            "discountPrice": "360",
            "image": "./src/assets/images/store-images/g27cq4-500x500 1.png",
            "rating": 5.0,
            "category": ""
        },
        {
            "id": 4,
            "name": "S-Series Comfort Chair",
            "price": 400,
            "discount": "-30",
            "discountPrice": "375",
            "image": "./src/assets/images/store-images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
            "rating": 4.5,
            "category": ""
        },
        {
            "id": 5,
            "name": "The north coat",
            "price": 360,
            "discount": "",
            "discountPrice": "",
            "image": "./src/assets/images/store-images/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png",
            "rating": 5.0,
            "category": ""
        },
        {
            "id": 6,
            "name": "Gucci duffle bag",
            "price": 1160,
            "discount": "-35",
            "discountPrice": "960",
            "image": "./src/assets/images/store-images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png",
            "rating": 4.5,
            "category": ""
        },
        {
            "id": 7,
            "name": "RGB liquid CPU Cooler",
            "price": 170,
            "discount": "-15",
            "discountPrice": "160",
            "image": "./src/assets/images/store-images/gammaxx-l240-argb-1-500x500 1.png",
            "rating": 4.5,
            "category": ""
        },
        {
            "id": 8,
            "name": "Small BookShelf",
            "price": 360,
            "discount": "",
            "discountPrice": "",
            "image": "./src/assets/images/store-images/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png",
            "rating": 5.0,
            "category": ""
        },
        {
            "id": 9,
            "name": "Breed Dry Dog Food",
            "price": 100,
            "discount": "",
            "discountPrice": "",
            "image": "./src/assets/images/store-images/71RdoeXxtrL 1.png",
            "rating": 3.0,
            "category": ""
        },
        {
            "id": 10,
            "name": "CANON E0S DSLR Camera",
            "price": 360,
            "discount": "-25",
            "discountPrice": "280",
            "image": "./src/assets/images/store-images/eos-250d-03-500x500 1.png",
            "rating": 4.0,
            "category": ""
        },
        {
            "id": 11,
            "name": "ASUS FHD Gaming Laptop",
            "price": 700,
            "discount": "",
            "discountPrice": "",
            "image": "./src/assets/images/store-images/ideapad-gaming-3i-01-500x500 1.png",
            "rating": 5.0,
            "category": ""
        },
        {
            "id": 12,
            "name": "Curology Product Set",
            "price": 500,
            "discount": "",
            "discountPrice": "",
            "image": "./src/assets/images/store-images/curology-j7pKVQrTUsM-unsplash 1.png",
            "rating": 4.0,
            "category": ""
        },
        {
            "id": 13,
            "name": "Kids Electric Car",
            "price": 960,
            "discount": "",
            "discountPrice": "",
            "image": "./src/assets/images/store-images/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png",
            "rating": 5.0,
            "category": ""
        },
        {
            "id": 14,
            "name": "Jr Zoom Soccer Cleats",
            "price": 1160,
            "discount": "-35",
            "discountPrice": "960",
            "image": "./src/assets/images/store-images/Copa_Sense 1.png",
            "rating": 4.5,
            "category": ""
        },
        {
            "id": 15,
            "name": "GPII Shooter USB Gamepad",
            "price": 660,
            "discount": "",
            "discountPrice": "",
            "image": "./src/assets/images/store-images/GP11_PRD3 1.png",
            "rating": 4.5,
            "category": ""
        },
        {
            "id": 16,
            "name": "Quilted Satin Jacket",
            "price": 660,
            "discount": "",
            "discountPrice": "",
            "image": "src/assets/images/store-images/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png",
            "rating": 4.5,
            "category": ""
        }
]

export type StoreContextType = {
    storeProducts: StoreProductType[]
}
 
const initStoreContext: StoreContextType = {
    storeProducts: []
}

export const storeContext = createContext<StoreContextType>(initStoreContext)
 
export type ChildrenType = {
    children?: ReactElement | ReactElement[] | undefined
}

const StoreProductsProvider = ({ children }: ChildrenType) => {
    const [storeProducts, _setStoreProducts] = useState<StoreProductType[]>(initState)

    return (
        <storeContext.Provider value={{storeProducts}}>
            {children}
        </storeContext.Provider>
    )

}


export default StoreProductsProvider

