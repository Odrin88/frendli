import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/imeg/user.png'


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize} `)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize} `)
            .then(response => {
                this.props.setUsers(response.data.items);

            });
    }

    render () {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return ( <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && classes.selectedPage} key={p.id}
                   onClick={ (e) => {this.onPageChenged(p)}}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div className={classes.user_block} key={u.id}>
                    <div className={classes.wrapper}>
                        <div className={classes.follow_block}>
                            <div className={classes.avatar}>
                                <img className={classes.users_img} src={u.photos.small
                                != null
                                    ? u.photos.small : userPhoto }/>
                            </div>
                            <div >
                                {u.followed
                                    ? <button className={classes.follow_btn} onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button className={classes.follow_btn} onClick={() => {
                                        this.props.follow(u.id)
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
        </div>)
    }

}
export default Users;