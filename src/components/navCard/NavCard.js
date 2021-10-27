import React from "react";
import "./NavCard.css";

const NavCard = (props) => {

    return (
        <div className="navCard">
            <div className="navImgContainer">
                <img className="navImg" src={props.icons} alt=''></img>
            </div>
            <div className="navCardText-new">
                <h2 className="navCardText">{props.cardText}</h2>
                <span className="announcements">{props.cardText2}</span>
            </div>
        </div>
    );
};

export default NavCard;