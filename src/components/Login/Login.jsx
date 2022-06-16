import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const Login = (props) => {
	return (
		<>
			{!props.isAuth ?
				(<div>
					<h1>Login</h1>
					<LoginForm onSubmit={formData => {
						props.login(formData.login, formData.password, formData.rememberMe);
					}}/>
				</div>)
				: <Navigate to='/profile'/>}
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}

export default connect(mapStateToProps, {login})(Login);