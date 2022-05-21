import { User} from '@supabase/supabase-js'
export interface UserState {
	darkMode: boolean;
	user: User|null;
}
export enum UserActionTypes {
	TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE',
	SET_STORAGE_DARK_MODE = 'SET_STORAGE_DARK_MODE',
}
interface toggleDarkMode {
	type: UserActionTypes.TOGGLE_DARK_MODE;
}
interface setStorageDarkMode {
	type: UserActionTypes.SET_STORAGE_DARK_MODE;
}

export type UserAction = toggleDarkMode | setStorageDarkMode;
