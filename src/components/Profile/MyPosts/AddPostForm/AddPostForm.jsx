import {Field, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {formComponentCreator} from "../../../common/FormComponents/FormComponents";

const maxLength30 = maxLengthCreator(30);
const Textarea = formComponentCreator('textarea');

const addPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea} name='newPostText' placeholder='Add new post'
					   validate={[required, maxLength30]}/>
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	);
};

export default reduxForm({form: 'addPost'})(addPostForm);