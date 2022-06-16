import React from 'react';
import styles from "../users.module.css";
import userPhoto from "../../../assets/images/user-default-avatar.png";
import {NavLink} from "react-router-dom";

export const User = ({user, fetchingToggleRequests, toggleFollow}) => {
	return (
		<div>
			<span>
				<div>
					<NavLink to={`/profile/${user.id}`}>
						<img className={styles.imageSize}
							 src={user.photos.small !== null ? user.photos.small : userPhoto} alt=''/>
					</NavLink>
					<button disabled={fetchingToggleRequests.includes(user.id)}
							onClick={() => {
								toggleFollow(user.id, user.followed);
							}}>
						{user.followed ? 'Unfollow' : 'Follow'}
					</button>
				</div>
			</span>
			<span>
				<span>
					<div>{user.name}</div>
					<div>{user.status}</div>
				</span>
				<span>
					<div>{"user.location.country"}</div>
					<div>{"user.location.city"}</div>
				</span>
			</span>
		</div>

	);
};