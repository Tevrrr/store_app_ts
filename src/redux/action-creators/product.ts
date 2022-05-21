import { Dispatch } from "react"
import { ProductAction, ProductActionTypes } from '../../common/types/product'
import { supabase} from '../../supabase/supabaseClient'



export const featchProducts = (tag: string) => {
    return async (dispatch: Dispatch<ProductAction>) => {
        dispatch({
			type: ProductActionTypes.SET_LOADING,
			payload: true,
		});
        const { data } = await supabase.from('product').select('*').eq('tag', tag);
        console.log(tag, ' - Загрузка - ', Date());
        
		dispatch({ type: ProductActionTypes.SET_PRODUCT, payload: data || [] });
	};
};

export const addCartItem = (id: string) => {
	return (dispatch: Dispatch<ProductAction>) => {
		dispatch({
			type: ProductActionTypes.ADD_CART,
			payload: id,
		});
	};
};

export const delCartItem = (id: string) => {
	return (dispatch: Dispatch<ProductAction>) => {
		dispatch({
			type: ProductActionTypes.DEL_CART,
			payload: id,
		});
	};
};

export const incrementCartItem = (id: string) => {
	return (dispatch: Dispatch<ProductAction>) => {
		dispatch({
			type: ProductActionTypes.INCREMENT_CART,
			payload: id,
		});
	};
};

export const decrementCartItem = (id: string) => {
	return (dispatch: Dispatch<ProductAction>) => {
		dispatch({
			type: ProductActionTypes.DECREMENT_CART,
			payload: id,
		});
	};
};