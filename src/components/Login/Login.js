import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {requaredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='login' name='login' component={Input} validate={[requaredField]}/>
        </div>
        <div>
            <Field placeholder='password' type='password' name='password' component={Input} validate={[requaredField]}/>
        </div>
        <div>
            <Field type='checkbox' name='rememberMe' component={Input}/>remember me
        </div>
        {(props.error) ?<div className='formSummaryError'>{props.error}</div>: null}
        <div>
            <button>Login</button>
        </div>
    </form>)
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formdata) => {
        props.login(formdata.login, formdata.password, formdata.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to='/profile'/>
    }

    return <>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit} />
    </>
}
const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
})

export default connect( mapStateToProps, {login})(Login);