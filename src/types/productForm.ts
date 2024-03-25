export interface FormDataType {
    name: string;
    price: number;
    image: File | null;
    stripeID: string;
    discount?: number;
    discountPrice?: number;
    rating?: number;
    category?: string;
}

export const fieldNames: (keyof FormDataType)[] = ["name", "price", "image", "stripeID", "discount", "discountPrice", "rating", "category"]