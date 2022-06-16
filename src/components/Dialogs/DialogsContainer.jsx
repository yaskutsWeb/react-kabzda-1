import {sendMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessage) => {
			dispatch(sendMessageActionCreator(newMessage));
		}
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	WithAuthRedirect,
)(Dialogs);