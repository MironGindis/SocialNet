import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store ={
    _state : {
        profilePage: {
            postsData: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 15,
                    source: 'https://avatars.mds.yandex.net/get-zen_doc/1328583/pub_5c51c6e9420c4000ad739cf2_5c52fcca3c26f500aef4416b/scale_1200'
                },
                {
                    id: 2,
                    message: 'Yo this is my first post',
                    likesCount: 23,
                    source: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/39c5e0dd-e819-4a7d-b314-5b9665bd8e30/d7bkh20-72708552-82b2-40ae-8b83-ee1dbe2e7846.jpg/v1/fill/w_768,h_960,q_75,strp/keanu_reeves___neo__matrix__by_zied8008_d7bkh20-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMzljNWUwZGQtZTgxOS00YTdkLWIzMTQtNWI5NjY1YmQ4ZTMwXC9kN2JraDIwLTcyNzA4NTUyLTgyYjItNDBhZS04YjgzLWVlMWRiZTJlNzg0Ni5qcGciLCJ3aWR0aCI6Ijw9NzY4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.izytAEyMlLpdU7qWbxOHbZzEoMihKinfjLrRXD-3UBU'
                },
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            newMessageText: '',
        }

    },
    _callSubscriber () {},

    getState () { return this._state;},
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },

}



export default store;
window.store = store;