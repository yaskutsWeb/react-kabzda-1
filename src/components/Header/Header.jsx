import React from "react";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<img className={styles.logotypeImage}
				 src="https://автолого.рф/wp-content/uploads/bmw-logo-2020-grey.png"
				 alt="LogoType"/>
		</header>
	);
}

export default Header;