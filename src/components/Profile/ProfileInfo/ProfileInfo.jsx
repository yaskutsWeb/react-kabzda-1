import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
	return (
		<div>
			<img className={styles.contentHeaderImage}
				 src="https://www.theautohost.com/_contentPages/vehicleContentPages/BMW/2022/X4/images/2022-BMW-X4-header.jpg"
				 alt="BMW"/>
			<div className={styles.descriptionBlog}>
				ava+description
			</div>
		</div>
	);
}

export default ProfileInfo;