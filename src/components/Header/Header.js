import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className='header'>
        <img alt='' src='https://www.sarfmarket.com.tr/Data/Markalar/97.jpg'/>
        <div className='LoginBlock'>
            {props.isAuth ? <>
                <div>
                    <button onClick={props.logout}>Logout</button>  {props.login}
                </div>
                </>
                : <NavLink to='/login'>Login</NavLink> }
        </div>
      </header>
};

export default Header;