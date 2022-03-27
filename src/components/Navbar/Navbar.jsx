import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.item}>
				<NavLink
					to="/profile"
					className={({isActive}) => isActive ? styles.active : ""}>
					Profile
				</NavLink>
			</div>
			<div className={styles.item}>
				<NavLink to={`/dialogs`}
						 className={({isActive}) => isActive ? styles.active : ""}>Messages</NavLink>
			</div>
			<div className={styles.item}>
				<a>News</a>
			</div>
			<div className={styles.item}>
				<a>Music</a>
			</div>
			<div className={styles.item}>
				<a>Settings</a>
			</div>
		</nav>
	);
}

export default Navbar;