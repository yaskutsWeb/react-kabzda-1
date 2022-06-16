import {createSelector} from "reselect";

export const getUsersUserReducerSelector = (state) => {
	return state.usersPage.users;
}

export const getFilteredUsersUserReducerSelector = createSelector(getUsersUserReducerSelector, (users) => {
	users.filter(u => true);
});

export const getPageSizeUserReducerSelector = (state) => {
	return state.usersPage.pageSize;
}

export const getTotalUsersCountUserReducerSelector = (state) => {
	return state.usersPage.totalUsersCount;
}

export const getCurrentPageUserReducerSelector = (state) => {
	return state.usersPage.currentPage;
}

export const getIsFetchingUserReducerSelector = (state) => {
	return state.usersPage.isFetching;
}

export const getfetchingToggleRequestsUserReducerSelector = (state) => {
	return state.usersPage.fetchingToggleRequests;
}