import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "yaProduction/authReducer/SET-USER-DATA";
const GET_CAPTCHA_URL_SUCCESS = 'yaProduction/authReducer/GET_CAPTCHA_URL_SUCCESS'

const initialState = {
	userID: null,
	email: null,
	login: null,
	isAuth: false,
	captchaURL: null
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload,
			};
		}
		case GET_CAPTCHA_URL_SUCCESS: {
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

export const getCaptchaURLSuccess = (captchaURL) => {
	return {
		type: GET_CAPTCHA_URL_SUCCESS,
		payload: {captchaURL}
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

export const login = (email, password, rememberMe = false, captcha = null) => {
	return async (dispatch) => {
		const response = await authAPI.login(email, password, rememberMe, captcha);
		if (response.data.resultCode === 0) {
			dispatch(getAuthorizedStatusThunkCreator());
		} else {
			if (response.data.resultCode === 10) {
				dispatch(getCaptchaURL());
			}
			dispatch(stopSubmit('login', {_error: response.data.messages.length ? response.data.messages.join() : 'Values is not correct, pls try once again'}));
		}
	};
};

export const getCaptchaURL = () => {
	return async (dispatch) => {
		const response = await securityAPI.getCaptchaURL();
		const captchaURL = response.data.url;
		dispatch(getCaptchaURLSuccess(captchaURL));
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