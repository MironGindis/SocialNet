const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo, man'},
        {id: 3, message: 'What are you doing?'},
    ],
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Alice'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Dasha'},
        {id: 7, name: 'Ivan'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ('SEND-MESSAGE'): {
            let newMessage = {
                id: 1, message: action.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }
        default:
            return state;
    }
}
export let SendMessage =(newMessageText) => {
    return {type: SEND_MESSAGE, newMessageText};
}
export default dialogsReducer;