/** @format */

import {
	ProductAction,
	ProductState,
	ProductActionTypes,
} from '../../common/types/product';
import { featchProducts } from '../action-creators/product';

const initialState: ProductState = {
	// products: [
	// 	{
	// 		title: 'Beef Meat',
	// 		description: 'string',
	// 		price: 5,
	// 		id: '1',
	// 		imgName: 'food-packaging-psd-mockup_336574-6.jpg',
	// 		tag: 'Meat',
	// 	},
	// 	{
	// 		title: 'Qualiti Meat',
	// 		description: 'string',
	// 		price: 7,
	// 		id: '2',
	// 		imgName: 'frozen-meat-tray-box-packaging-mockup_439185-7826.jpg',
	// 		tag: 'Meat',
	// 	},
	// 	{
	// 		title: 'Meat',
	// 		description: 'string',
	// 		price: 7.5,
	// 		id: '3',
	// 		imgName: 'meat-tray-box-packaging-mockup_439185-7842.jpg',
	// 		tag: 'Meat',
	// 	},
	// 	{
	// 		title: 'Tray Meat',
	// 		description: 'string',
	// 		price: 5.25,
	// 		id: '4',
	// 		imgName: 'meat-tray-packaging-mockup-template_1051-3218.jpg',
	// 		tag: 'Meat',
	// 	},
	// 	{
	// 		title: 'Farmland Meat',
	// 		description: 'string',
	// 		price: 3,
	// 		id: '5',
	// 		imgName: 'raw-meat-tray-box-packaging-mockup_47987-4553.jpg',
	// 		tag: 'Meat',
	// 	},
	// ],
    loading: false,
	products: [],
	cart: []
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
