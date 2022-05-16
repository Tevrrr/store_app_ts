import {  ProductAction, ProductState, ProductActionTypes } from '../../common/types/product'

const initialState: ProductState = {
    products: [],
    tag: 'All'
};

export const productReducer = (
	state = initialState,
	action: ProductAction
): ProductState => {
	switch (action.type) {
		case ProductActionTypes.SET_TAG:
			return { ...state, tag: action.payload};
		default:
			return state;
	}
};