import React from 'react';
import classes from './Myprofile.module.css';
import {compose} from "redux";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../HOC/AuthRedirect";
import ProfileStatus from "./ProfileStatus";

const Myprofile = (props) => {

    return <div className={classes.content}>
        <img className={classes.img} src="https://prokadastr.com/wp-content/uploads/2019/09/kak-besplatno-poluchit-zemlu.jpg"/>
        <div className={classes.avatarblock}>
            <img className={classes.avatar} src="https://i04.fotocdn.net/s106/6ee26575aa7dcb29/user_l/2285411336.jpg"/>

        </div>
        <div className={classes.profile_wrapper}>
            <div className={classes.social_links}>
                <div className={classes.social_block}>
                    <ul className={classes.social_items}>
                        <li className={classes.social_text}>
                            <a className={classes.social_link}>
                                <img src="https://iqonic.design/themes/socialv/html-dark/images/icon/08.png" className={classes.social_icon}/>
                            </a>
                        </li>
                        <li className={classes.social_text}>
                            <a className={classes.social_link}>
                                <img src="https://iqonic.design/themes/socialv/html-dark/images/icon/09.png" className={classes.social_icon}/>
                            </a>
                        </li>
                        <li className={classes.social_text}>
                            <a className={classes.social_link}>
                                <img src="https://iqonic.design/themes/socialv/html-dark/images/icon/10.png" className={classes.social_icon}/>
                            </a>
                        </li>
                        <li className={classes.social_text}>
                            <a className={classes.social_link}>
                                <img src="https://iqonic.design/themes/socialv/html-dark/images/icon/11.png" className={classes.social_icon}/>
                            </a>
                        </li>
                        <li className={classes.social_text}>
                            <a className={classes.social_link}>
                                <img src="https://iqonic.design/themes/socialv/html-dark/images/icon/12.png" className={classes.social_icon}/>
                            </a>
                        </li>
                        <li className={classes.social_text}>
                            <a className={classes.social_link}>
                                <img src="https://iqonic.design/themes/socialv/html-dark/images/icon/13.png" className={classes.social_icon}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.nameprofile}>
                Ordin Evgeny
            </div>
            <ProfileStatus/>
            <div className={classes.social_data}>
                <ul className={classes.social_data_info}>
                    <li className={classes.social_data_item}>
                        <h6>
                            Posts
                        </h6>
                        <p>
                            690
                        </p>
                    </li>
                    <li className={classes.social_data_item}>
                        <h6>
                            Followers
                        </h6>
                        <p>
                            204
                        </p>
                    </li>
                    <li className={classes.social_data_item}>
                        <h6>
                            Following
                        </h6>
                        <p>
                            108
                        </p>
                    </li>
                </ul>
            </div>
        </div>


    </div>
}

export default compose (connect(),
withAuthRedirect) (Myprofile);
