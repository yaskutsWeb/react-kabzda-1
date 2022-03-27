import React from 'react';
import styles from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

const Dialogs = (props) => {
	const dialogsElements = props.state.dialogs.map(dialog => <DialogItem key={dialog.userID} id={dialog.userID}
																	userName={dialog.userName}/>);
	const messagesElements = props.state.messages.map(message => <Message key={message.id} id={message.id}
																	msg={message.msg}/>);

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={styles.messages}>
				{messagesElements}
			</div>
		</div>
	);
}

export default Dialogs;