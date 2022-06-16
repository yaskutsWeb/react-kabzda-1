import React from "react";
import {Field, reduxForm} from "redux-form";
import {formComponentCreator} from "../../common/FormComponents/FormComponents";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);
const Textarea = formComponentCreator('textarea');

const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field
					placeholder='Enter new message'
					name="newMessageBody"
					cols="30" rows="10"
					component={Textarea}
					validate={[required, maxLength50]}
				/>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	);
};

export default reduxForm({form: 'addMessage'})(AddMessageForm);