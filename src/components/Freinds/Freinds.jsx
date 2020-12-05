import React from 'react';
import classes from './Freinds.module.css';
import FreindsBar from "./FreindsBar/FreindsBar";

const Freinds = ({state}) => {

    let FreindsItem = state.users.map( (users,index) => (
        <FreindsBar
            key = {index}
            name={users.name}
            surname={users.surname}
            id={users.id}
        />
    ));
    return (
        <div className={classes.my_friends}>
            <h2 className={classes.freinds_title}>My Freinds</h2>
            <div className={classes.freinds_info}>
                <div className={classes.freinds_avatar}>
                </div>
                {FreindsItem}
            </div>
        </div>
    )
}

export default Freinds;