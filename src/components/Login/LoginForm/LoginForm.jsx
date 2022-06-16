import React from "react";
import {Field, reduxForm} from "redux-form";
import {formComponentCreator} from "../../common/FormComponents/FormComponents";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";

const InputText = formComponentCreator('input', 'text');
const InputPassword = formComponentCreator('input', 'password');
const Checkbox = formComponentCreator('input', 'checkbox');
const maxLength20 = maxLengthCreator(20);
const minLength4 = minLengthCreator(4);

const LoginForm = ({handleSubmit, error}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<Field type="text" placeholder={'login'} name={`login`} component={InputText}
					   validate={[required, maxLength20]}/>
			</div>
			<div>
				<Field type="password" placeholder={'password'} name={`password`} component={InputPassword}
					   validate={[required, minLength4]}/>
			</div>
			<div>
				<Field id={"remember me"} type="checkbox" name={`rememberMe`} component={Checkbox}/>
				<label htmlFor={"remember me"} name={`rememberMeLabel`}>Remember me</label>
			</div>
			{error && (
				<div>
					{error}
				</div>
			)}
			<button>Login</button>
		</form>
	)
}

export default reduxForm({form: 'login'})(LoginForm);