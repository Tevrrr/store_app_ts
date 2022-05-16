export interface ProductState {
    products: Product[],
    tag: string
}
export interface Product {
	title: string;
	description: string;
    price: number;
    id: string;
}
export enum ProductActionTypes {
   SET_TAG = "SET_TAG"
}
interface setTag {
    type: ProductActionTypes.SET_TAG;
    payload: string;
}

export type ProductAction = setTag;