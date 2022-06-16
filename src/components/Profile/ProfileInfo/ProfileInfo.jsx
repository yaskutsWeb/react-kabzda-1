import React from "react";
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusFunctional from "./ProfileStatus/ProfileStatusFunctional";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div>
			<div className={styles.descriptionBlog}>
				<img src={props.profile.photos.large} alt=""/>
				<ProfileStatusFunctional status={props.status} updateUserStatus={props.updateUserStatus}/>
			</div>
		</div>
	);
}

export default ProfileInfo;