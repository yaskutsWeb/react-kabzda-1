import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "yaProduction/authReducer/SET-USER-DATA";

const initialState = {
	userID: null,
	email: null,
	login: null,
	isAuth: false,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
};

export const setAuthUserData = (userID, email, login, isAuth) => {
	return {
		type: SET_USER_DATA,
		payload: {userID, email, login, isAuth}
	};
};


export const getAuthorizedStatusThunkCreator = () => {
	return async (dispatch) => {
		const response = await authAPI.getAuthorizedStatus();
		const {id, email, login} = response.data.data;
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(id, email, login, true));
		}
	}
}

export const login = (email, password, rememberMe) => {
	return async (dispatch) => {
		const response = await authAPI.login(email, password, rememberMe);
		if (response.data.resultCode === 0) {
			dispatch(getAuthorizedStatusThunkCreator());
		} else {
			dispatch(stopSubmit('login', {_error: response.data.messages.length ? response.data.messages.join() : 'Values is not correct, pls try once again'}));
		}
	};
};

export const logout = () => {
	return async (dispatch) => {
		const response = await authAPI.logout();
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
	};
};