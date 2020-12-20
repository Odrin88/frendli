import React from 'react';
import './App.css';
import Nav from '../components/Nav/Nav.jsx';
import News from '../components/News/News';
import Musik from "../components/Musik/Musik";
import Setting from "../components/Setting/Setting";
import  {BrowserRouter, Route}  from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import FreindsContainer from "./Freinds/FreindsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./Login/Login";
import UsersProfileContainer from "./UserProfilePage/UsersProfileContainer";





const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render = { () =>
                        <ProfileContainer /> }/>
                    <Route path='/dialogs' render = { () =>
                        <DialogsContainer /> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/musik' component={Musik}/>
                    <Route path='/setting' component={Setting}/>
                    <Route path='/users'
                           render = { () => <UsersContainer /> }/>
                    <Route path='/login'
                           render = { () => <Login /> }/>
                    <Route path='/usersprofile/:userId?'
                           render = { () => <UsersProfileContainer /> }/>
                </div>
                <FreindsContainer />

            </div>
        </BrowserRouter>

    );
}
export default App;


