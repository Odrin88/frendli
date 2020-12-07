import React from 'react';
import './App.css';
import Header from '../components/Header/Header.jsx';
import Nav from '../components/Nav/Nav.jsx';
import Profile from '../components/Profile/Profile.jsx';
import News from '../components/News/News';
import Musik from "../components/Musik/Musik";
import Setting from "../components/Setting/Setting";
import Freinds from "../components/Freinds/Freinds";
import  {BrowserRouter, Route}  from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";


const App = (props) => {

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
                </div>
                {/*<Freinds />*/}
            </div>
        </BrowserRouter>

    );
}
export default App;


