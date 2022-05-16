export interface UserState {
    darkMode: boolean;
}
export enum UserActionTypes {
	TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE',
}
interface ToggleDarkMode {
	type: UserActionTypes.TOGGLE_DARK_MODE;
}

export type UserAction = ToggleDarkMode;
