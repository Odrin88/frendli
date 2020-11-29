import React from 'react';
import classes from './Posts.module.css'

const Posts = (props) => {

    
    return (
      <div>
        <div className={classes.item}>
        <img className={classes.item} src="https://i04.fotocdn.net/s106/6ee26575aa7dcb29/user_l/2285411336.jpg"/>
          {props.message}
          <div>
            <button>Like</button>
            <span>{props.like}</span>
          </div>
        </div>
      </div>
    )
   
}

export default Posts;