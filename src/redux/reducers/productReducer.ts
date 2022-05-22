/** @format */

import {
	ProductAction,
	ProductState,
	ProductActionTypes,
} from '../../common/types/product';
import { featchProducts } from '../action-creators/product';

const initialState: ProductState = {
	loading: false,
	products: [],
	cart: [],
};

export const productReducer = (
	state = initialState,
	action: ProductAction
): ProductState => {
	switch (action.type) {
		case ProductActionTypes.SET_PRODUCT:
			return {
				...state,
				products: action.payload,
				loading: false,
			};
		case ProductActionTypes.EMPTY_CART:
			return {
				...state,
				cart:[],
			};
		case ProductActionTypes.SET_LOADING:
			return { ...state, loading: action.payload };
		case ProductActionTypes.ADD_CART:
			return {
				...state,
				cart: [...state.cart, { id: action.payload, quantity: 1 }],
			};
		case ProductActionTypes.DEL_CART: {
			const cart = state.cart.filter(
				(item) => item.id !== action.payload
			);
			return { ...state, cart };
		}
		case ProductActionTypes.INCREMENT_CART: {
			const cart = state.cart.map((item) => {
				if (item.id === action.payload) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			return { ...state, cart };
		}
		case ProductActionTypes.DECREMENT_CART: {
			const cart = state.cart.map((item) => {
				if (item.id === action.payload) {
					return { ...item, quantity: item.quantity - 1 };
				}
				return item;
			});
			return { ...state, cart };
		}
		default:
			return state;
	}
};

featchProducts('Meat');
