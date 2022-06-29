import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {uploadUserPhoto} from "../../redux/profileReducer";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}
						 uploadUserPhoto={props.uploadUserPhoto}
						 isOwner={props.isOwner}/>
			<MyPostsContainer/>
		</div>
	);
}

export default Profile;