import React from "react";
import './DialogsItem.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) =>{
    let path = "/dialogs/" + props.id;
    return<div className='Dialogs__item'>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogsItem;