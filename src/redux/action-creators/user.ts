/** @format */

import { UserAction, UserActionTypes } from '../../common/types/user';
import { Dispatch } from 'redux';
import { supabase } from '../../supabase/supabaseClient';

export const toggleDarkMode = () => {
	return (dispatch: Dispatch<UserAction>) => {
		dispatch({ type: UserActionTypes.TOGGLE_DARK_MODE });
	};
};

export const setStorageDarkMode = () => {
	return (dispatch: Dispatch<UserAction>) => {
		dispatch({ type: UserActionTypes.SET_STORAGE_DARK_MODE });
	};
};

export const registerUser = (
	email: string,
	password: string,
	fullName: string
) => {
	return async () => {
		try {
			const { user, error } = await supabase.auth.signUp({
				email,
				password,
			});
			if (error) throw error;

			if (!(user?.identities?.length !== 0))
				console.log('The user with this email is already registered!');
			else {
				const { error } = await supabase.from('user').insert([
					{
						userUID: user?.id,
						fullName,
						email,
					},
				]);
				if (error) throw error;

				console.log(
					'Account created successfully! An email has been sent to you to confirm it.'
				);
			}
		} catch (e) {
			console.log(e);
		}
	};
};

export const loginStorage = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		let data = localStorage.getItem('user');
		if (data === null) {
			data = sessionStorage.getItem('user');
			if (data !== null) {
			}
		}
		if (data !== null) {
			try {
				const { email, password } = JSON.parse(data);
				const { user, error } = await supabase.auth.signIn({
					email,
					password,
				});
				if (error) throw error;
				let { data: fullName, error: error_ } = await supabase
					.from('user')
					.select('fullName')
					.eq('userUID', user?.id);
				if (error) throw error_;

				if (user && fullName)
					dispatch({
						type: UserActionTypes.LOGIN_USER,
						payload: { user: user, fullName: fullName[0].fullName },
					});
			} catch (e: any) {
				console.log(e);
				if ((e.message = 'Invalid login credentials'))
					console.log('Invalid login credentials');
			}
		}
	};
};

export const login = (email: string, password: string, saving: boolean) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			const { user, error } = await supabase.auth.signIn({
				email,
				password,
			});
			if (error) throw error;
			console.log(user);

			let { data: fullName, error: error_ } = await supabase
				.from('user')
				.select('fullName')
				.eq('userUID', user?.id);
			if (error) throw error_;

			if (user && fullName)
				dispatch({
					type: UserActionTypes.LOGIN_USER,
					payload: { user: user, fullName: fullName[0].fullName },
				});
			if (saving) {
				localStorage.setItem(
					'user',
					JSON.stringify({ email, password })
				);
			} else {
				localStorage.setItem(
					'user',
					JSON.stringify({ email, password })
				);
			}
		} catch (e: any) {
			console.log(e);
			if ((e.message = 'Invalid login credentials'))
				console.log('Invalid login credentials');
		}
	};
};

export const exitUser = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		dispatch({ type: UserActionTypes.EXIT_USER });
		sessionStorage.removeItem('user');
		localStorage.removeItem('user');
	};
};

export const sendOrderForm = (
	name: string,
	phoneNumber: string,
	address: string,
	products: string
) => {
	return async () => {
		try {
			const { error } = await supabase
				.from('orders')
				.insert([{ name, phoneNumber, address, products }]);
			if (error) throw error;
		} catch (e) {
			console.log(e);
		}
	};
};
