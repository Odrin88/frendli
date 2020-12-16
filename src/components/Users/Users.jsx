import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../assets/imeg/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";



const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }


    return <div>

        <div className={classes.page_wrapper}>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                             key={p.id}
                             onClick={ () => {
                                 props.onPageChenged(p);
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div className={classes.user_block} key={u.id}>
                <div className={classes.wrapper}>
                    <div className={classes.follow_block}>
                        <div className={classes.avatar}>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={classes.users_img} src={u.photos.small
                                != null
                                    ? u.photos.small : userPhoto }/>
                            </NavLink>

                        </div>
                        <div >
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.follow_btn} onClick={() => {
                                    props.toggleFollowingInProgress(true, u.id);
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "760aba0f-5e1d-4fb6-bef2-b3b15312dea4"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingInProgress(false, u.id);
                                        });
                                }}>Unfollow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} className={classes.follow_btn} onClick={() => {
                                    props.toggleFollowingInProgress(true, u.id);
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "760aba0f-5e1d-4fb6-bef2-b3b15312dea4"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingInProgress(false, u.id);
                                        });
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={classes.info_block}>
                        <div className={classes.name_con}>
                            <div>{u.name}</div>
                            <div>{"u.location.country"}</div>

                        </div>
                        <div className={classes.status_loc_sts}>
                            <div>{u.status}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;