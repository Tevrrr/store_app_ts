/** @format */

export interface ProductState {
	products: Product[];
	cart: ICartItem[];
	tag: string;
}

export interface ICartItem {
	id: string;
	quantity: number;
}

export interface Product {
	title: string;
	description: string;
	price: number;
	id: string;
	imgName: string;
	tag: string;
}
export enum ProductActionTypes {
	SET_PRODUCT = 'SET_PRODUCT',
	ADD_CART = 'ADD_CART',
	DEL_CART = 'DEL_CART',
	INCREMENT_CART = 'INCREMENT_CART',
	DECREMENT_CART = 'DECREMENT_CART',
}

interface setProduct {
	type: ProductActionTypes.SET_PRODUCT;
	payload: {
		products: Product[];
		tag: string;
	};
}
interface itemCart {
	type:
		| ProductActionTypes.ADD_CART
		| ProductActionTypes.DEL_CART
		| ProductActionTypes.INCREMENT_CART
		| ProductActionTypes.DECREMENT_CART;
	payload: string;
}



export type ProductAction = setProduct | itemCart;
