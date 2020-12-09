import React from 'react';
import './App.css';
import Header from '../components/Header/Header.jsx';
import Nav from '../components/Nav/Nav.jsx';
import Profile from '../components/Profile/Profile.jsx';
import News from '../components/News/News';
import Musik from "../components/Musik/Musik";
import Setting from "../components/Setting/Setting";
import  {BrowserRouter, Route}  from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import FreindsContainer from "./Freinds/FreindsContainer";
import UsersContainer from "./Users/UsersContainer";


const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render = { () =>
                        <Profile /> }/>
                    <Route path='/dialogs' render = { () =>
                        <DialogsContainer /> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/musik' component={Musik}/>
                    <Route path='/setting' component={Setting}/>
                    <Route path='/users'
                           render = { () => <UsersContainer /> }/>
                </div>
                <FreindsContainer />
            </div>
        </BrowserRouter>

    );
}
export default App;


