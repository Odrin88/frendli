import React from 'react';
import Freinds from "./Freinds";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        users: state.freindsBar.users
    }
}
const FreindsContainer = connect (mapStateToProps) (Freinds);

export default FreindsContainer;