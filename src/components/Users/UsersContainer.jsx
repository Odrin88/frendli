import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingInProgress, unfollow,
} from "../../Reducers/usersPage";
import Users from "./Users";
import Preloader from "../comman/preloader/Preloader";
import {withAuthRedirect} from "../../HOC/AuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {

        this.props.getUsers(this.props.currentPage,this.props.pageSize);

    }

    onPageChenged = (pageNumber) => {

        this.props.getUsers(pageNumber,this.props.pageSize);

    }

    render () {
        return <>
            {this.props.isFetching ? <Preloader />: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChenged={this.onPageChenged}
                      users ={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      followingInProgress={this.props.followingInProgress}
            />

            </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}
export default compose(withAuthRedirect,
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingInProgress,
            getUsers
        })
    ) (UsersContainer)


/*const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}*/



