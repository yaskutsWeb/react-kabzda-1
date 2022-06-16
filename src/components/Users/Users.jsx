import React from 'react';
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";

export const Users = (props) => {
	return (
		<div>
			<Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
					   onPageChanged={props.onPageChanged}/>
			{
				props.users.map(user => {
					return (
						<User user={user} fetchingToggleRequests={props.fetchingToggleRequests}
							  toggleFollow={props.toggleFollow} key={user.id}/>
					)
				})
			}
		</div>
	);
};