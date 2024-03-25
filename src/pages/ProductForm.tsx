import axios from "axios";
import { useState } from "react"
import {FormDataType, fieldNames} from "../types/productForm"

const initialFormState: FormDataType = {
    name: "",
    price: 0,
    image: null,
    stripeID: "",
    discount: 0, 
    discountPrice: 0,
    rating: 0,
    category: ""
}

const ProductForm = () => {
    const [formValues, setFormValues] = useState(initialFormState)

    const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData()
        for (const fieldName of fieldNames) {
            const value = formValues[fieldName]

            if (value !== undefined && value !== null) {
                formData.append(fieldName, value instanceof File ? value : value.toString())
            }
        }
        
        try {
            const response = await axios.post("http://localhost:3500/products/upload", formData)

            if (response.status === 201) {
                alert(`${response.data.message}`)
            }
        } catch(err) {
            console.log(err)
        }
    }

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName = event.target.name
        let fieldValue

        if (fieldName === "image") {
            fieldValue = event.target.files ? event.target.files[0] : null
        } else {
            fieldValue = event.target.value
        }

        setFormValues({...formValues, [fieldName]: fieldValue})
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
                <input className="border-[1.7px] py-2 px-2 outline-none" type="text" inputMode="decimal" pattern="[0-9]*[.,]?[0-9]*" name="rating" placeholder="product rating" onChange={onInputChange}/>
                <input className="border-[1.7px] py-2 px-2 outline-none" type="text" name="category" placeholder="product category" onChange={onInputChange}/>
                <button className="bg-secondary-700 px-4 py-4 text-white mb-4 hover:bg-opacity-[0.8]" type="submit">Add Product</button>
            </form>
        </main>
    )
}

export default ProductForm