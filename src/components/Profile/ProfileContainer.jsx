import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
	getCurrentUserThunkCreator,
	getUserStatus,
	saveProfile,
	updateUserStatus,
	uploadUserPhoto
} from "../../redux/profileReducer";
import {compose} from "redux";
import WithURLParams from "../../hoc/WithURLParams";
import {Navigate, useParams} from "react-router-dom";
import withURLParams from "../../hoc/WithURLParams";


class ProfileContainer extends React.Component {
	userID = null;
	parseUserID = () => {
		this.userID = +this.props.params?.userID;
		if (!this.userID && this.props.isAuth) {
			this.userID = this.props.currentUserID ? this.props.currentUserID : null;
		}
		if (this.userID) {
			this.props.getCurrentUser(this.userID);
			this.props.getUserStatus(this.userID);
		}
	}

	componentDidMount() {
		this.parseUserID();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.params?.userID !== this.props.params?.userID) {
			this.parseUserID();
		}
	}

	render() {
		if (!this.props.isAuth) {
			return <Navigate to='/login'/>;
		} else {
			return (
				<Profile {...this.props} isOwner={this.props.currentUserID === this.userID}
						 saveProfile={this.props.saveProfile}/>
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
	connect(mapStateToProps, {
		getCurrentUser: getCurrentUserThunkCreator,
		getUserStatus,
		updateUserStatus,
		uploadUserPhoto,
		saveProfile
	}),
	withURLParams
)(ProfileContainer);
