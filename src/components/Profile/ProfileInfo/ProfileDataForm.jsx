import React from "react";
import {formComponentCreator} from "../../common/FormComponents/FormComponents";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";

const InputFullName = formComponentCreator('input', 'text');
const CheckBoxLookingForAJob = formComponentCreator('input', 'checkbox');
const TextArea = formComponentCreator('textarea', 'text');

const ProfileDataForm = ({handleSubmit, error, profile, ...props}) => {
	console.log(error);
	return (
		<form onSubmit={handleSubmit}>
			{error && (
				<div>
					{error}
				</div>
			)}
			<button>save</button>
			<div>
				<h3>Full name:</h3>
				<Field type='text' name={`fullName`} component={InputFullName}
					   validate={[required]}/>
			</div>
			<div>
				<h3>Looking for a job:</h3>
				<Field type="checkbox"
					   name={`lookingForAJob`} component={CheckBoxLookingForAJob}/>
				<div>
					<h3>My professional skills:</h3>
					<Field type='textarea'
						   name={`lookingForAJobDescription`}
						   component={TextArea}/>
				</div>
			</div>
			<div>
				<h3>About me:</h3>
				<Field type='textarea'
					   name={`aboutMe`}
					   component={TextArea}/>
			</div>
			<div>
				<h3>Contacts:</h3>
				{Object.keys(profile.contacts).map(key => {
					return (
						<div>
							{key}: <Field type='text'
										  name={`contacts.${key}`}
										  component={InputFullName}/>
						</div>
					);
				})}
			</div>
		</form>);
};

export default reduxForm({form: 'editProfile'})(ProfileDataForm);