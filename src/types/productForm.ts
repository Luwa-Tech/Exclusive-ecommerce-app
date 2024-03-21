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