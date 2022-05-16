import { Dispatch } from "react"
import { ProductAction, ProductActionTypes} from '../../common/types/product'

export const setTag = (payload: string) => {
	return (dispatch: Dispatch<ProductAction>) => {
		dispatch({ type: ProductActionTypes.SET_TAG, payload });
	};
};