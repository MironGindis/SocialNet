import React from "react";
import './FormsControls.css';

export const Textarea = ({input, meta, ...props}) => {
    return (<div className={ (meta.touched && meta.error) ? 'formsControls error' : 'formsControls'}>
        <div>
            <textarea  {...input} {...props}/>
        </div>
        { (meta.touched && meta.error) ?<span>{meta.error}!</span>: null}
    </div>)
}

export const Input = ({input, meta, ...props}) => {
    return (<div className={ (meta.touched && meta.error) ? 'formsControls error' : 'formsControls'}>
        <div>
            <input  {...input} {...props}/>
        </div>
        { (meta.touched && meta.error) ?<span>{meta.error}!</span>: null}
    </div>)
}