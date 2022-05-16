import {UserAction, UserActionTypes, UserState} from "../../common/types/user";

const initialState: UserState = {
    darkMode: false
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.TOGGLE_DARK_MODE:
            return { darkMode: !state.darkMode };
        default:
            return state
    }
}
