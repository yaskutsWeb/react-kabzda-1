import {getAuthorizedStatusThunkCreator} from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

const initialState = {
	isInitialized: false
};

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_INITIALIZED: {
			return {
				...state,
				isInitialized: true
			};
		}
		default:
			return state;
	}
};

export const setInitializedAppState = () => {
	return {
		type: SET_INITIALIZED
	}
};

export const initializeApp = () => async (dispatch) => {
	await dispatch(getAuthorizedStatusThunkCreator());
	dispatch(setInitializedAppState());
};
