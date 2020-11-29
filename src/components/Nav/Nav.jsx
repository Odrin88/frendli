import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return <nav className={classes.nav}>
      <ul>
          <li><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
          <li><NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink></li>
          <li><NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
          <li><NavLink to="/musik" activeClassName={classes.active}>Musik</NavLink></li>
          <li><NavLink to="/setting" activeClassName={classes.active}>Setting</NavLink></li>
      </ul>
  </nav>
}

export default Nav;