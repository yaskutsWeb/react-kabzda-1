import usersAPI from "../api/api";

const TOGGLE_FOLLOW = 'yaProduction/users/TOGGLE-FOLLOW';
const SET_USERS = 'yaProduction/users/SET-USERS';
const SET_CURRENT_PAGE = 'yaProduction/users/SET-CURRENT-PAGE';
const SET_USERS_COUNT = 'yaProduction/users/SET-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'yaProduction/users/TOGGLE-IS-FETCHING';
const TOGGLE_REQUEST_SENDING = 'yaProduction/users/TOGGLE-REQUEST-SENDING';

const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	fetchingToggleRequests: []
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_FOLLOW: {
			return {
				...state,
				users: state.users.map(user => {
					if (user.id === action.userID) {
						return {...user, followed: !user.followed}
					}
					return user;
				})
			};
		}
		case SET_USERS: {
			return {
				...state,
				users: [...action.users]
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.newPage
			}
		}
		case SET_USERS_COUNT: {
			return {
				...state,
				totalUsersCount: action.totalUsersCount
			}
		}
		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: action.isFetching
			}
		}
		case TOGGLE_REQUEST_SENDING: {
			return {
				...state,
				fetchingToggleRequests: action.isFetching
					? [...state.fetchingToggleRequests, action.profileID]
					: state.fetchingToggleRequests.filter(elementID => elementID !== action.profileID),
			}
		}
		default:
			return state;
	}
}

export const toggleFollow = (userID) => {
	return {
		type: TOGGLE_FOLLOW,
		userID: userID
	}
};
export const setUsers = (users) => {
	return {
		type: SET_USERS,
		users: users
	}
};
export const setCurrentPage = (newPage) => {
	return {
		type: SET_CURRENT_PAGE,
		newPage: newPage
	}
};
export const setTotalUsersCount = (totalUsersCount) => {
	return {
		type: SET_USERS_COUNT,
		totalUsersCount
	}
};
export const toggleIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching: isFetching
	}
};
export const toggleRequestSending = (isFetching, profileID) => {
	return {
		type: TOGGLE_REQUEST_SENDING,
		isFetching,
		profileID
	}
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		const response = await usersAPI.getUsers(currentPage, pageSize);
		dispatch(toggleIsFetching(false));
		dispatch(setUsers(response.data.items));
		dispatch(setTotalUsersCount(response.data.totalCount));
	};
};

export const toggleUserFollowedThunkCreator = (userID, isFollowed) => {
	return async (dispatch) => {
		dispatch(toggleRequestSending(true, userID));
		const apiRequest = isFollowed ? 'removeSubscribeUser' : 'setSubscribeUser';
		const response = await usersAPI[apiRequest](userID)
		if (response.data.resultCode === 0) dispatch(toggleFollow(userID))
		dispatch(toggleRequestSending(false, userID));
	};
};


export default usersReducer;