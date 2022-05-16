/** @format */

import { UserAction, UserActionTypes } from '../../common/types/user';
import { Dispatch } from 'redux';

export const toggleDarkMode = () => {
	return (dispatch: Dispatch<UserAction>) => {
		dispatch({ type: UserActionTypes.TOGGLE_DARK_MODE });
	};
};
