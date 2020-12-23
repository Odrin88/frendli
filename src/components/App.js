import React from 'react';
import './App.css';
import Nav from '../components/Nav/Nav.jsx';
import News from '../components/News/News';
import Musik from "../components/Musik/Musik";
import Setting from "../components/Setting/Setting";
import {Route}  from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import FreindsContainer from "./Freinds/FreindsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";
import UsersProfileContainer from "./UserProfilePage/UsersProfileContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Preloader from "./comman/preloader/Preloader";
import {initializeApp} from "../Reducers/AppReducer";


class App extends React.Component {

    componentDidMount() {

        this.props.initializeApp();

    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Route path='/profile' render={() =>
                            <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() =>
                            <DialogsContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/musik' component={Musik}/>
                        <Route path='/setting' component={Setting}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                        <Route path='/usersprofile/:userId?'
                               render={() => <UsersProfileContainer/>}/>
                    </div>
                    <FreindsContainer/>

                </div>


        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose (
    withRouter,
    connect(mapStateToProps,
        {initializeApp})) (App);


