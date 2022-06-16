import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={styles.header}>
			<img className={styles.logotypeImage}
				 src="https://автолого.рф/wp-content/uploads/bmw-logo-2020-grey.png"
				 alt="LogoType"/>
			<div className={styles.loginBlock}>
				{props.isAuth
					? (<div>
						{props.login}
						<button onClick={() => {
							props.logout()
						}}>Logout
						</button>
					</div>)
					: <NavLink to={`/login`}>Login</NavLink>}
			</div>
		</header>
	);
}

export default Header;