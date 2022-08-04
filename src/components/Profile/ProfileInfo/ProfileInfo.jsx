import React, {useState} from "react";
import styles from "./ProfileInfo.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatusFunctional from "./ProfileStatus/ProfileStatusFunctional";
import defaultPhoto from "../../../assets/images/user-default-avatar.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({uploadUserPhoto, saveProfile, ...props}) => {
	const [editMode, setEditMode] = useState(false);
	if (!props.profile) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			uploadUserPhoto(e.target.files[0]);
		}
	}

	const editModeChangeState = (value) => {
		setEditMode(value);
	}

	const onSubmit = async (formData) => {
		saveProfile(formData);
		// setEditMode(false);
	}

	return (
		<div>
			<div className={styles.descriptionBlog}>
				<img src={props.profile.photos.large || defaultPhoto} alt=""/>
				{props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
				{editMode ?
					<ProfileDataForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile}/> :
					<ProfileData profile={props.profile} isOwner={props.isOwner}
								 editModeChangeState={() => editModeChangeState(true)}/>}
				<ProfileStatusFunctional status={props.status} updateUserStatus={props.updateUserStatus}/>
			</div>
		</div>
	);
}

const ProfileData = ({profile, isOwner, editModeChangeState}) => {
	return (
		<div>
			{isOwner && <button onClick={editModeChangeState}>edit</button>}
			<div>
				<h3>Full name:</h3>
				<p>{profile.fullName}</p>
			</div>
			<div>
				<h3>Looking for a job:</h3>
				<p>{profile.lookingForAJob ? 'yes' : 'no'}</p>
				{profile.lookingForAJob &&
					<div>
						<h3>My professional skills:</h3>
						<p>{profile.lookingForAJobDescription}</p>
					</div>
				}
			</div>
			<div>
				<h3>About me:</h3>
				<p>{profile.aboutMe}</p>
			</div>
			<div>
				<h3>Contacts:</h3>
				{Object.keys(profile.contacts).map(key => {
					return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
				})}
			</div>
		</div>);
};

const Contact = ({contactTitle, contactValue}) => {
	return (
		<div>
			<h3>{contactTitle}</h3>
			<p>{contactValue}</p>
		</div>
	);
};

export default ProfileInfo;