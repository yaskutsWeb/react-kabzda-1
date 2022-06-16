import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export const store = {
	_state: {
		sidebar: {}
	},
	_callSubscriber() {
		console.log(this._state);
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	getState() {
		return this._state;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._callSubscriber(this._state);
	}
}

