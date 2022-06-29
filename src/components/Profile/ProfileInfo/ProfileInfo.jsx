import React from "react";
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusFunctional from "./ProfileStatus/ProfileStatusFunctional";
import defaultPhoto from "../../../assets/images/user-default-avatar.png";

const ProfileInfo = ({uploadUserPhoto, ...props}) => {
	if (!props.profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			uploadUserPhoto(e.target.files[0]);
		}
	}

	return (
		<div>
			<div className={styles.descriptionBlog}>
				<img src={props.profile.photos.large || defaultPhoto} alt=""/>
				{props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
				<ProfileStatusFunctional status={props.status} updateUserStatus={props.updateUserStatus}/>
			</div>
		</div>
	);
}

export default ProfileInfo;