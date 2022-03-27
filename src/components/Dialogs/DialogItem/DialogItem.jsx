import styles from './DialogItem.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

export const DialogItem = (props) => {

	return (
		<div className={`${styles.dialog} + ${styles.dialogActive}`}>
			<NavLink to={`/dialogs/${props.id}`}>{props.userName}</NavLink>
		</div>
	);
};