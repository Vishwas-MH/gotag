import React from "react";
import "./Header.css";
import gotagImage from "../../assets/images/header/gotagimg.png";
import icon_notification from "../../assets/images/header/icon_notification.png";
import icon_profile from "../../assets/images/header/icon_profile.png";
import icon_hamburger from "../../assets/images/header/icon_hamburger.svg";

const Header = () => {
    return (
        <header className="appHeader">
            <img className="hamburger" src={icon_hamburger} alt=""></img>
            <img className="gotagImage" src={gotagImage} alt=""></img>
            <div className="headerRight">
                <img className="bellIcon" src={icon_notification} alt=""></img>
                <div className="name_profile">
                    <div className="profileInfo">
                        <h3>Maria Gomez</h3>
                        <span>Admin</span>
                    </div>
                    <img className="profileImg" src={icon_profile} alt=""></img>
                </div>
            </div>
        </header>
    );
};

export default Header;
