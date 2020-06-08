import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks  = (props) =>{

        let [editMode, setEditMode] =useState(false);
        let [status, setStatus] =useState(props.status);

        useEffect( ()=> {
            setStatus(props.status);
        }, [props.status])

        const toggleEditMode = () => {
            setEditMode(!editMode);
            if (editMode) {props.updateUserStatus(status);}
        }

        const onStatusChange = (e) =>{
            setStatus(e.currentTarget.value);
        }
        return (<div>

            { !editMode &&
                <div>
                <span onDoubleClick={ props.isOwner ? toggleEditMode : null}>{!props.status ? '-----------' : props.status} </span>
            </div>}
            { editMode &&
                <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={toggleEditMode} value={status}/>
            </div>}
        </div>)


}

export default ProfileStatusWithHooks;