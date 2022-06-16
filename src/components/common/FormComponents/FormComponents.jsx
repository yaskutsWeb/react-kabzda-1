import React from 'react';
import styles from './FormComponents.module.css';

export const formComponentCreator = (Component, type) => {
	return ({input, meta, ...props}) => {
		const isInvalid = meta.touched && meta.invalid;
		return (
			<div className={`${styles.formControl} ${isInvalid ? styles.error : null}`}>
				<Component {...input} {...props} type={type ? type : null}/>
				<div>
					{isInvalid ? <span>{meta.error}</span> : null}
				</div>
			</div>
		);
	};
};