import {SendMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps =(state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
        messages: state.dialogsPage.messages,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        SendMessage:  (NewMessage) => {
            dispatch(SendMessage(NewMessage));
        },
    }
}
export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);