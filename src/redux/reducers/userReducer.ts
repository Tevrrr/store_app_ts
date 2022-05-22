/** @format */

import {
	UserAction,
	UserActionTypes,
	UserState,
} from '../../common/types/user';

const initialState: UserState = {
	darkMode: false,
    user: null,
    fullName: '',
};

export const userReducer = (
	state = initialState,
	action: UserAction
): UserState => {
	switch (action.type) {
		case UserActionTypes.TOGGLE_DARK_MODE: {
			localStorage.setItem('darkMode', JSON.stringify(!state.darkMode));
			return { ...state, darkMode: !state.darkMode };
		}
		case UserActionTypes.SET_STORAGE_DARK_MODE: {
			const darkMode = localStorage.getItem('darkMode');
			if (darkMode) return { ...state, darkMode: JSON.parse(darkMode) };
			return { ...state, darkMode: false };
		}
		case UserActionTypes.EXIT_USER: {
			return { ...state, user: null };
		}
		case UserActionTypes.LOGIN_USER: {
			return { ...state,  ...action.payload };
		}
		default:
			return state;
	}
};
