import React from 'react';
import ReactDOM from 'react-dom';
import store from "./Redux/Redux-store";
import './index.css';
import App from './components/App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

    ReactDOM.render(

        <Provider store={store}>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </Provider>,
       document.getElementById('root'));



/*state = {state};
dispatch={store.dispatch.bind(store)}
store={store}*/
