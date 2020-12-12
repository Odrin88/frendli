import React from "react";
import pageLoad from "../../assets/imeg/load.svg";
import classes from './preloader.module.css';


const Preloader = (props) =>{
    return <img className={classes.style_preloader} src={pageLoad} />
}

export default Preloader;