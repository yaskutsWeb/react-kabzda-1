import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getCurrentUserThunkCreator, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {compose} from "redux";
import WithURLParams from "../../hoc/WithURLParams";
import {Navigate, useParams} from "react-router-dom";
import withURLParams from "../../hoc/WithURLParams";


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userID = +this.props.params?.userID;
		if (!userID && this.props.isAuth) {
			userID = this.props.currentUserID ? this.props.currentUserID : null;
		}
		if (userID) {
			this.props.getCurrentUser(userID);
			this.props.getUserStatus(userID);
		}
	}

	render() {
		if (!this.props.isAuth) {
			return <Navigate to='/login'/>;
		} else {
			return (
				<Profile {...this.props}/>
			);
		}
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		currentUserID: state.auth.userID,
		isAuth: state.auth.isAuth
	};
};

export default compose(
	connect(mapStateToProps, {getCurrentUser: getCurrentUserThunkCreator, getUserStatus, updateUserStatus}),
	withURLParams
)(ProfileContainer);
