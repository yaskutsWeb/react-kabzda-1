import React from 'react';
import {
	getUsersThunkCreator,
	setCurrentPage, toggleUserFollowedThunkCreator
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {
	getCurrentPageUserReducerSelector, getfetchingToggleRequestsUserReducerSelector, getIsFetchingUserReducerSelector,
	getPageSizeUserReducerSelector, getTotalUsersCountUserReducerSelector,
	getUsersUserReducerSelector
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	};

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.getUsers(pageNumber, this.props.pageSize);
	};

	render() {
		return (
			<>
				{this.props.isFetching ? <Preloader/> : null}
				<Users
					onPageChanged={(pageNumber) => {
						this.onPageChanged(pageNumber)
					}}
					currentPage={this.props.currentPage}
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					users={this.props.users}
					fetchingToggleRequests={this.props.fetchingToggleRequests}
					toggleFollow={this.props.toggleFollow}
				/>
			</>
		);
	};
}

const mapStateToProps = (state) => {
	return {
		users: getUsersUserReducerSelector(state),
		pageSize: getPageSizeUserReducerSelector(state),
		totalUsersCount: getTotalUsersCountUserReducerSelector(state),
		currentPage: getCurrentPageUserReducerSelector(state),
		isFetching: getIsFetchingUserReducerSelector(state),
		fetchingToggleRequests: getfetchingToggleRequestsUserReducerSelector(state)
	};
};


export default connect(mapStateToProps, {
	setCurrentPage,
	getUsers: getUsersThunkCreator,
	toggleFollow: toggleUserFollowedThunkCreator
})(UsersContainer);