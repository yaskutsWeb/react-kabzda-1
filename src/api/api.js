import axios from "axios";

const apiKey = 'be8be2b0-317b-49af-b3dc-fd3a3407e15d'

const instance = axios.create({
	withCredentials: true,
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {'api-key': apiKey}
})

const usersAPI = {
	getUsers: (currentPage = 1, pageSize = 10) => {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`);
	},
	setSubscribeUser: (userID) => {
		return instance.post(`follow/${userID}`, {});
	},
	removeSubscribeUser: (userID) => {
		return instance.delete(`follow/${userID}`);
	}
};

export const profileAPI = {
	getProfile: (userID) => {
		return instance.get(`profile/${userID}`);
	},
	getStatus: (userID) => {
		return instance.get(`profile/status/${userID}`);
	},
	updateStatus: (status) => {
		return instance.put(`profile/status/`, {status: status});
	},
	savePhoto: (photoFile) => {
		const formData = new FormData();
		formData.append('image', photoFile);
		return instance.put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		});
	},
	saveProfile: (profile) => {
		return instance.put(`profile/`, profile);
	}
}

export const authAPI = {
	getAuthorizedStatus: () => {
		return instance.get(`auth/me`);
	},
	login: (email, password, rememberMe, captcha) => {
		return instance.post(`auth/login`, {email, password, rememberMe, captcha});
	},
	logout: () => {
		return instance.delete('auth/login');
	},
};

export const securityAPI = {
	getCaptchaURL: () => {
		return instance.get(`security/get-captcha-url`);
	},
}

export default usersAPI;