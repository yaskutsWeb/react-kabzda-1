import React, {useEffect, useState} from "react";

const ProfileStatusFunctional = (props) => {
	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	const openEditMode = () => {
		setEditMode(true);
	}
	const closeEditMode = () => {
		setEditMode(false);
		props.updateUserStatus(status);
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	};

	return (
		<>
			{!editMode &&
				<div>
					<h3>Status:</h3>
					<p onClick={openEditMode}>
						{status || 'add status'}
					</p>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} autoFocus={true} onBlur={closeEditMode} type="text"
						   value={status}/>
				</div>
			}
		</>
	);
}

export default ProfileStatusFunctional;