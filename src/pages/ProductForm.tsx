import { useState } from "react"

interface FormDataType {
    name: string;
    price: number;
    image: File;
    stripeID: string;
    discount?: number;
    discountPrice?: number;
    rating?: number;
    category?: string;
}

const initialFormState: FormDataType = {
    name: "",
    price: 0,
    image: undefined,
    stripeID: "",
    discount: 0, 
    discountPrice: 0,
    rating: 0,
    category: ""
}

//TODO

// 1.Fix typescript errors
// 2. Connect form to api
// 3. Upload all products to DB

const ProductForm = () => {
    const [formValues, setFormValues] = useState(initialFormState)

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let fieldValue

        if (fieldName === "image") {
            fieldValue = event.target.files[0]
        } else {
            fieldValue = event.target.value
        }

        setFormValues({...formValues, [fieldName]: fieldValue})
        console.log(formValues)
    }
    return (
        <main className="w-[60%] md:w-[40%] mx-auto my-[4rem]">
            <form className="flex flex-col gap-4" onSubmit={onFormSubmit}>
                <input className="border-[1.7px] py-2 px-2 outline-none" type="text" name="name" placeholder="Product name" required onChange={onInputChange}/>
                <input className="border-[1.7px] py-2 px-2 outline-none" type="number" name="price" placeholder="price.." required onChange={onInputChange}/>
                <input className="border-[1.7px] py-2 px-2 outline-none" type="file" name="image" required onChange={onInputChange}/>
                <input className="border-[1.7px] py-2 px-2 outline-none" type="text" name="stripeID" placeholder="stripe id" required onChange={onInputChange}/>
                <input className="border-[1.7px] py-2 px-2 outline-none" type="number" name="discount" placeholder="disount.." onChange={onInputChange}/>
                <input className="border-[1.7px] py-2 px-2 outline-none" type="number" name="discountPrice" placeholder="disount price.." onChange={onInputChange}/>
                <input className="border-[1.7px] py-2 px-2 outline-none" type="number" name="rating" placeholder="product rating" onChange={onInputChange}/>
                <input className="border-[1.7px] py-2 px-2 outline-none" type="text" name="category" placeholder="product category" onChange={onInputChange}/>
                <button className="bg-secondary-700 px-4 py-4 text-white mb-4 hover:bg-opacity-[0.8]" type="submit">Add Product</button>
            </form>
        </main>
    )
}

export default ProductForm