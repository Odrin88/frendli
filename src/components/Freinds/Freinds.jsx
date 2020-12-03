import React from 'react';
import classes from './Freinds.module.css';
import FreindsBar from "./FreindsBar/FreindsBar";

const Freinds = (props) => {

    let FreindsItem = props.state.users.map( users => <FreindsBar name={users.name} surname={users.surname}
        key={users} id={users.id} /> );

    let addFreinds = () => {
        props.addFreinds()
    }

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