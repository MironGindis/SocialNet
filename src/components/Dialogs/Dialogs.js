import React from "react";
import './Dialogs.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, requaredField} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let addNewMessage = (values) => {
        props.SendMessage(values.newMessageBody);
    }
    let dialogsElements = props.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messages.map(message => <Message id={message.id} message={message.message}/>);
    if (!props.isAuth)  return <Redirect to='/login'/>
    return <div className='Dialogs'>
        <div className='Dialogs__page'>
            {dialogsElements}
        </div>
        <div className='Dialogs__messages'>
            {messagesElements}
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    </div>
}
const maxLength50= maxLenghtCreator(50);
const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
                <Field name='newMessageBody' component={Textarea} placeholder={'Enter your message'} validate={[requaredField, maxLength50]}/>
    </div>
    <button>Send message</button>
    </form>)
}
const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm',
})(AddMessageForm)
export default Dialogs;