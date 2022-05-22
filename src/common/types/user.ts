import { User} from '@supabase/supabase-js'
export interface UserState {
	darkMode: boolean;
    user: User | null;
    fullName: string;
}
export enum UserActionTypes {
	TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE',
	SET_STORAGE_DARK_MODE = 'SET_STORAGE_DARK_MODE',
	LOGIN_USER = 'LOGIN_USER',
	EXIT_USER = 'EXIT_USER',
}
interface toggleDarkMode {
	type: UserActionTypes.TOGGLE_DARK_MODE;
}
interface exitUser {
	type: UserActionTypes.EXIT_USER;
}
interface setStorageDarkMode {
	type: UserActionTypes.SET_STORAGE_DARK_MODE;
}
interface loginUser {
	type: UserActionTypes.LOGIN_USER;
	payload: { user: User; fullName: string };
}

export type UserAction = toggleDarkMode | setStorageDarkMode | loginUser | exitUser;
