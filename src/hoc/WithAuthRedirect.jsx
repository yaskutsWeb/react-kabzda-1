import React from 'react';
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

export const WithAuthRedirect = (Component) => {
	const withRedirectWrapper = (props) => {
		if (!props.isAuth) {
			return <Navigate to='/login'/>;
		}
		return <Component {...props}/>;
	}
	return connect(mapStateToProps)(withRedirectWrapper);
};

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	};
};
