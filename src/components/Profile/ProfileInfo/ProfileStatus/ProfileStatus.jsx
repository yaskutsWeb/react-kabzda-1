import React from "react";

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	};

	componentDidUpdate(prevProps) {
		if (prevProps.status !== this.props.status) {
			this.setState({status: this.props.status});
		}
	}

	openEditMode = () => {
		this.setState({editMode: true});
	};

	closeEditMode = () => {
		this.setState({editMode: false});
		this.props.updateUserStatus(this.state.status);
	};

	onStatusChange = (e) => {
		this.setState({status: e.currentTarget.value});
	};

	render() {
		return (
			<>
				{!this.state.editMode &&
					<div>
						<p onClick={this.openEditMode}>
							{this.state.status}
						</p>
					</div>
				}
				{this.state.editMode &&
					<div>
						<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.closeEditMode} type="text"
							   value={this.state.status}/>
					</div>
				}
			</>
		);
	};
}

export default ProfileStatus;