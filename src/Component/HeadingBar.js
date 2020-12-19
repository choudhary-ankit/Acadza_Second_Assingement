import React from 'react';
import Style from './HeadingBar.module.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LockIcon from '@material-ui/icons/Lock';
import Divider from '@material-ui/core/Divider';
const navBar=()=>{
    return(
        <div className={Style.body}>
            <div className={Style.welcome_board}>
                <select className={Style.select_option}>
                    <option>Board</option>
                </select>
                <div className={Style.welcome_div}>
                    Welcome to Board
                </div>
                <div className={Style.select_option}><StarBorderIcon/></div>
                <Divider className={Style.divider}/>
                <div className={Style.select_option}>Add to team</div>
                <div className={Style.select_option}><LockIcon className={Style.private_icon}/>Private</div>
                <Divider className={Style.divider}/>
                <div className={Style.circle_arrang}>
                    <div className={Style.ak}>Ak</div>
                    <div className={Style.two_line}>
                        <div className={Style.line}></div>
                        <div className={Style.line}></div>
                    </div>
                </div>
                <div className={Style.select_option}>Invite</div>
            </div>
            <div className={Style.butler}>
                <div className={Style.butler_div}>
                    <img src="./butler.png" style={{width:"15px", height:"15px"}}></img>
                    <p>Butller</p>
                </div>
            </div>
        </div>
    )
}
export default navBar;