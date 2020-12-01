import React from 'react';
import './App.css';
import Header from '../components/Header/Header.jsx';
import Nav from '../components/Nav/Nav.jsx';
import Profile from '../components/Profile/Profile.jsx';
import Dialogs from "../components/Dialogs/Dialogs";
import News from '../components/News/News';
import Musik from "../components/Musik/Musik";
import Setting from "../components/Setting/Setting";
import Topnav from "../components/TopNavbar/Topnav";
import {BrowserRouter, Route} from 'react-router-dom';






const App = (props) => {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render = { () =>
                        <Profile posts={props.state.profilePage.posts}/> }/>
                    <Route path='/dialogs' render = { () =>
                        <Dialogs state={props.state.messagePage}/> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/musik' component={Musik}/>
                    <Route path='/setting' component={Setting}/>
                </div>
                <Topnav/>
            </div>
        </BrowserRouter>
    );
}
export default App;

