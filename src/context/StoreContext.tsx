import { createContext, ReactElement, useState } from "react";

import gamepad from "../assets/images/store-images/g92-2-500x500 1.png"
import wiredKeyboard from "../assets/images/store-images/ak-900-01-500x500 1.png"
import gamingMonitor from "../assets/images/store-images/g27cq4-500x500 1.png"
import comfortChair from "../assets/images/store-images/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png"
import northCoat from "../assets/images/store-images/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png"
import gucciDuffleBag from "../assets/images/store-images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png"
import rgbCooler from "../assets/images/store-images/gammaxx-l240-argb-1-500x500 1.png"
import bookshelf from "../assets/images/store-images/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png"
import dogFood from "../assets/images/store-images/71RdoeXxtrL 1.png"
import canonCamera from "../assets/images/store-images/eos-250d-03-500x500 1.png"
import gamingLaptop from "../assets/images/store-images/ideapad-gaming-3i-01-500x500 1.png"
import productSet from "../assets/images/store-images/curology-j7pKVQrTUsM-unsplash 1.png"
import kidsElectricCar from "../assets/images/store-images/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png"
import soccerCleats from "../assets/images/store-images/Copa_Sense 1.png"
import usbGamepad from "../assets/images/store-images/GP11_PRD3 1.png"
import satinJacket from "../assets/images/store-images/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png"

export type StoreProductType = {
    "id": string,
    "name": string,
    "price": number,
    "discount": string,
    "discountPrice": string,
    "image": string,
    "rating": number,
    "category": string,
    "stripeID": string
}

//change price to discount price for each item except soccercleats

//gamepad: price_1Nc463EQoG2EqoC4WgLge1nq
//wiredKeyboard: price_1Nc47DEQoG2EqoC42cYxPVD8
//gamingMonitor: price_1Nc48uEQoG2EqoC4JdC3fhBL
//comfortChair: price_1Nc4AnEQoG2EqoC4Lq9QWMof
//northCoat: price_1Nc3YuEQoG2EqoC48JipyBWD
//gucciduffelbag: price_1Nc4ByEQoG2EqoC4EWqJly96
//rgbCooler: price_1Nc4DNEQoG2EqoC4gMA2UUGp
//bookShelf: price_1Nc3eaEQoG2EqoC4L0ZeGeFP
//dogFood: price_1Nc3gWEQoG2EqoC4YXtrt4Tq
//canonCamera: price_1Nc4F2EQoG2EqoC49JsNE0Ig
//gamingLaptop: price_1Nc3jzEQoG2EqoC4wwKcvUw7
//productSet: price_1Nc3llEQoG2EqoC4L7TocHTO
//kidsElectricCar: price_1Nc3nKEQoG2EqoC4fvxeeXrp
//soccerCleats: price_1Nc3tWEQoG2EqoC4RxDSCgU3
//usbGamepad: price_1Nc3yvEQoG2EqoC4MXnq7Af8
//satinJacket: price_1Nc40mEQoG2EqoC4q2kI7bpi

const initState: StoreProductType[] = [
        {
            "id": "1",
            "name": "HAVIT HV-G92 Gamepad",
            "price": 160,
            "discount": "-30",
            "discountPrice": "120",
            "image": gamepad,
            "rating": 5.0,
            "category": "",
            "stripeID": "price_1Nc463EQoG2EqoC4WgLge1nq"
        },
        {
            "id": "2",
            "name": "AK 900 Wired Keyboard",
            "price": 1160,
            "discount": "-35",
            "discountPrice": "960",
            "image": wiredKeyboard,
            "rating": 4.0,
            "category": "",
            "stripeID": "price_1Nc47DEQoG2EqoC42cYxPVD8"
        },
        {
            "id": "3",
            "name": "IPS LCD Gaming Monitor",
            "price": 400,
            "discount": "-30",
            "discountPrice": "360",
            "image": gamingMonitor,
            "rating": 5.0,
            "category": "",
            "stripeID": "price_1Nc48uEQoG2EqoC4JdC3fhBL"
        },
        {
            "id": "4",
            "name": "S-Series Comfort Chair",
            "price": 400,
            "discount": "-30",
            "discountPrice": "360",
            "image": comfortChair,
            "rating": 4.5,
            "category": "",
            "stripeID": "price_1Nc4AnEQoG2EqoC4Lq9QWMof"
        },
        {
            "id": "5",
            "name": "The north coat",
            "price": 360,
            "discount": "",
            "discountPrice": "",
            "image": northCoat,
            "rating": 5.0,
            "category": "",
            "stripeID": "price_1Nc3YuEQoG2EqoC48JipyBWD"
        },
        {
            "id": "6",
            "name": "Gucci duffle bag",
            "price": 1160,
            "discount": "-35",
            "discountPrice": "960",
            "image": gucciDuffleBag,
            "rating": 4.5,
            "category": "",
            "stripeID": "price_1Nc4ByEQoG2EqoC4EWqJly96"
        },
        {
            "id": "7",
            "name": "RGB liquid CPU Cooler",
            "price": 170,
            "discount": "-15",
            "discountPrice": "155",
            "image": rgbCooler,
            "rating": 4.5,
            "category": "",
            "stripeID": "price_1Nc4DNEQoG2EqoC4gMA2UUGp"
        },
        {
            "id": "8",
            "name": "Small BookShelf",
            "price": 360,
            "discount": "",
            "discountPrice": "",
            "image": bookshelf,
            "rating": 5.0,
            "category": "",
            "stripeID": "price_1Nc3eaEQoG2EqoC4L0ZeGeFP"
        },
        {
            "id": "9",
            "name": "Breed Dry Dog Food",
            "price": 100,
            "discount": "",
            "discountPrice": "",
            "image": dogFood,
            "rating": 3.0,
            "category": "",
            "stripeID": "price_1Nc3gWEQoG2EqoC4YXtrt4Tq"
        },
        {
            "id": "10",
            "name": "CANON E0S DSLR Camera",
            "price": 360,
            "discount": "-25",
            "discountPrice": "280",
            "image": canonCamera,
            "rating": 4.0,
            "category": "",
            "stripeID": "price_1Nc4F2EQoG2EqoC49JsNE0Ig"
        },
        {
            "id": "11",
            "name": "ASUS FHD Gaming Laptop",
            "price": 700,
            "discount": "",
            "discountPrice": "",
            "image": gamingLaptop,
            "rating": 5.0,
            "category": "",
            "stripeID": "price_1Nc3jzEQoG2EqoC4wwKcvUw7"
        },
        {
            "id": "12",
            "name": "Curology Product Set",
            "price": 500,
            "discount": "",
            "discountPrice": "",
            "image": productSet,
            "rating": 4.0,
            "category": "",
            "stripeID": "price_1Nc3llEQoG2EqoC4L7TocHTO"
        },
        {
            "id": "13",
            "name": "Kids Electric Car",
            "price": 960,
            "discount": "",
            "discountPrice": "",
            "image": kidsElectricCar,
            "rating": 5.0,
            "category": "",
            "stripeID": "price_1Nc3nKEQoG2EqoC4fvxeeXrp"
        },
        {
            "id": "14",
            "name": "Jr Zoom Soccer Cleats",
            "price": 1160,
            "discount": "-35",
            "discountPrice": "960",
            "image": soccerCleats,
            "rating": 4.5,
            "category": "",
            "stripeID": "price_1Nc3tWEQoG2EqoC4RxDSCgU3"
        },
        {
            "id": "15",
            "name": "GPII Shooter USB Gamepad",
            "price": 660,
            "discount": "",
            "discountPrice": "",
            "image": usbGamepad,
            "rating": 4.5,
            "category": "",
            "stripeID": "price_1Nc3yvEQoG2EqoC4MXnq7Af8"
        },
        {
            "id": "16",
            "name": "Quilted Satin Jacket",
            "price": 660,
            "discount": "",
            "discountPrice": "",
            "image": satinJacket,
            "rating": 4.5,
            "category": "",
            "stripeID": "price_1Nc40mEQoG2EqoC4q2kI7bpi"
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

