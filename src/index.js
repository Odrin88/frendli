import React from 'react';
import ReactDOM from 'react-dom';
import store from "./Redux/Redux-store";
import './index.css';
import App from './components/App';
import StoreContext from "./StoreContext";




let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>,
       document.getElementById('root'));
}

rerenderEntireTree(store.getState());

let state = store.getState();
store.subscribe(() => {
    rerenderEntireTree(state);
});

/*state = {state};
dispatch={store.dispatch.bind(store)}
store={store}*/
