import React from "react";
import './Users.css';
import userPhoto from '../../assets/images/User-Icon.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {

    return <div className='Users__body'>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
        {
            props.users.map(u => <div key={u.id}>
                <div className='User__body'>
                    <div className='User__followblock'>
                        <NavLink to={'/profile/' + u.id}>
                            <div className='User__avatar'>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className='Avatar__img'/>
                            </div>
                        </NavLink>
                        {u.followed ? <button disabled={props.followingNiProgress.some (id => id === u.id)} onClick={() => {
                                props.unfollowThunk(u.id)
                            }

                            }>Unfollow</button> :
                            <button disabled={props.followingNiProgress.some (id => id === u.id)} onClick={() => {
                                props.followThunk(u.id)
                            }

                            }>Follow</button>}
                    </div>
                    <div className='User__info'>
                        <div className='User__name'>{u.name}</div>
                        <div className='User__status'>{u.id}</div>
                        <div className='User__location'>{'u.location.country'}, <p>{'u.location.city'}</p></div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users