import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import WithURLParams from "./hoc/WithURLParams";
import {compose} from "redux";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.isInitialized) {
			return <Preloader/>
		}
		return (
			<div className="app-wrapper">
				<HeaderContainer/>
				<Navbar/>
				<main className="app-wrapper_content">
					<Suspense
						fallback={<Preloader/>}>
						<Routes>
							<Route path="/profile/:userID"
								   element={<ProfileContainer/>}/>
							<Route path="/profile/"
								   element={<ProfileContainer/>}/>
							<Route path="/dialogs/*"
								   element={<DialogsContainer/>}/>
							<Route path="/users"
								   element={<UsersContainer/>}/>
							<Route path="/login"
								   element={<Login/>}/>
						</Routes>
					</Suspense>
				</main>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isInitialized: state.app.isInitialized
	}
}


export default compose(
	connect(mapStateToProps, {initializeApp}),
	WithURLParams
)(App);

