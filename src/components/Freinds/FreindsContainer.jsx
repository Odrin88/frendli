import React from 'react';
import classes from './Freinds.module.css';
import Freinds from "./Freinds";
import StoreContext from "../../StoreContext";

const FreindsContainer = () => {

    return (
        <StoreContext.Consumer>
            {

                (store) => {
                    let state = store.getState()
                    return (
                        <Freinds users={state.freindsBar.users}/>
                    )

                }
            }
        </StoreContext.Consumer>

    )
}

export default FreindsContainer;