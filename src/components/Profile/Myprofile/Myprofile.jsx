import React from 'react';
import classes from './Myprofile.module.css';

const Myprofile = () => {
    return <div className={classes.content}>
    <div>
      <img className={classes.img} src="https://www.freelancejob.ru/upload/244/7181aa8c7818bb80893d08044fc8d4b2.jpg"/>
      <img className={classes.avatar} src="https://i04.fotocdn.net/s106/6ee26575aa7dcb29/user_l/2285411336.jpg"/>
        <span>
            Ordin Evgeny
        </span>
    </div>
  </div>
}

export default Myprofile;