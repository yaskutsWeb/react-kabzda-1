import styles from "./Message.module.css";
import React from "react";

export const Message = (props) => {
	return (
		<div className={styles.message}>{props.msg}</div>
	);
};