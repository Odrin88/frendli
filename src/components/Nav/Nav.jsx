import React from 'react';
import classes from './Nav.module.css'

const Nav = () => {
    return <nav className={classes.nav}>
          <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Messaage</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Musik</a></li>
          <li><a href="#">Setting</a></li>
      </ul>
  </nav>
}

export default Nav;