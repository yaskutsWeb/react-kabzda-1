import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "yaProduction/profile/ADD-NEW-POST-TEXT";
const SET_USER_PROFILE = 'yaProduction/profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'yaProduction/profile/SET-USER-STATUS';
const DELETE_POST = 'yaProduction/profile/DELETE-POST';
const SAVE_PHOTO = 'yaProduction/profile/SAVE-PHOTO';

const initialState = {
	posts: [
		{id: 1, msg: "pashasdasdasda", likesCount: 25},
		{id: 2, msg: "andresadyJ", likesCount: 17},
		{id: 3, msg: "Romasdasa", likesCount: 0},
		{id: 4, msg: "sobaasdasdasken", likesCount: 104},
		{id: 5, msg: "Krakdasdasden", likesCount: 64},
	],
	profile: null,
	status: 'add me'
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			const newPost = {
				id: 6,
				msg: action.newPostText,
				likesCount: 21
			};
			return {
				...state,
				posts: [...state.posts, newPost]
			};
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			};
		}
		case SET_USER_STATUS: {
			return {
				...state,
				status: action.status
			};
		}
		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postID)
			};
		}
		case SAVE_PHOTO: {
			return {
				...state,
				profile: {...state.profile, photos: action.photos}
			};
		}
		default: {
			return state;
		}
	}
};

export const addPostActionCreator = (newPostText) => {
	return {
		type: ADD_POST,
		newPostText
	};
};


export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile
	};
};

export const setUserStatus = (status) => {
	return {
		type: SET_USER_STATUS,
		status
	};
};

export const deletePost = (postID) => ({type: DELETE_POST, postID});
export const setUserPhoto = (photos) => ({type: SAVE_PHOTO, photos});

export const getCurrentUserThunkCreator = (userID) => {
	return async (dispatch) => {
		const response = await profileAPI.getProfile(userID);
		dispatch(setUserProfile(response.data));
	};
};

export const getUserStatus = (userID) => {
	return async (dispatch) => {
		const response = await profileAPI.getStatus(userID);
		dispatch(setUserStatus(response.data));
	};
};

export const updateUserStatus = (status) => {
	return async (dispatch) => {
		const response = await profileAPI.updateStatus(status);
		if (response.data.resultCode === 0) {
			dispatch(setUserStatus(status));
		}
	};
};

export const uploadUserPhoto = (photoFile) => async (dispatch) => {
	const response = await profileAPI.savePhoto(photoFile);
	if (response.data.resultCode === 0) {
		dispatch(setUserPhoto(response.data.data.photos));
	}
}

export const saveProfile = (profile) => async (dispatch, getState) => {
	const userID = getState().auth.userID;
	const response = await profileAPI.saveProfile(profile);
	if (response.data.resultCode === 0) {
		dispatch(getCurrentUserThunkCreator(userID));
	} else {
		dispatch(stopSubmit('editProfile', {_error: response.data.messages.length ? response.data.messages.join() : 'Values is not correct, pls try once again'}));
	}
}