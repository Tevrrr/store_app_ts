/** @format */

export interface ProductState {
    loading: boolean;
	products: Product[];
	cart: ICartItem[];
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
	SET_LOADING = 'SET_LOADING',
	ADD_CART = 'ADD_CART',
	DEL_CART = 'DEL_CART',
	EMPTY_CART = 'EMPTY_CART',
	INCREMENT_CART = 'INCREMENT_CART',
	DECREMENT_CART = 'DECREMENT_CART',
}

interface setProduct {
	type: ProductActionTypes.SET_PRODUCT;
	payload: Product[];
}
interface setLoading {
	type: ProductActionTypes.SET_LOADING;
	payload:  boolean;
}
interface itemCart {
	type:
		| ProductActionTypes.ADD_CART
		| ProductActionTypes.DEL_CART
		| ProductActionTypes.INCREMENT_CART
		| ProductActionTypes.DECREMENT_CART;
	payload: string;
}

interface emptyCart {
    type: ProductActionTypes.EMPTY_CART;
}



export type ProductAction = setProduct | setLoading | itemCart | emptyCart;
