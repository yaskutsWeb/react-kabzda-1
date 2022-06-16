const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
	messages: [
		{id: 1, msg: "pashasdasdasda"},
		{id: 2, msg: "andresadyJ"},
		{id: 3, msg: "Romasdasa"},
		{id: 4, msg: "sobaasdasdasken"},
		{id: 5, msg: "Krakdasdasden"},
	],
	dialogs: [
		{userID: 1, userName: "pasha"},
		{userID: 2, userName: "andreyJ"},
		{userID: 3, userName: "Roma"},
		{userID: 4, userName: "Sobaken"},
		{userID: 5, userName: "Kraken"},
	]
};

export const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			const newMessage = {
				id: 54,
				msg: action.messageBody
			};
			return {
				...state,
				messages: [...state.messages, newMessage]
			};
		}
		default:
			return state;
	}
};

export const sendMessageActionCreator = (messageBody) => {
	return {
		type: SEND_MESSAGE,
		messageBody: messageBody
	};
};