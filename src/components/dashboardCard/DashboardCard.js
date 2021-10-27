import React from "react";
import "./DashboardCard.css";

const DashboardCard = (props) => {
    return (
        <div className="Dashboard-card">
            <div className="cardLeft">
                <img src={props.icon} alt=""></img>
                <div className="cardInfo">
                    <h2 className="cardTitle">{props.title}</h2>
                    <span className="months">{props.subtext}</span>
                </div>
            </div>
            <div className="textAlignment">
            <div className="cardRight">
                <div className="count_and_text">
                <h2 className="cardCount">{props.count1}</h2>
                <span className="cardText">{props.text1}</span>
                </div>
                {props.text2 && (
                    <div className="count_and_text">
                    <h2 className="cardCount2">{props.count2}</h2>
                    <span className="cardText">{props.text2}</span>
                    </div>
                )}
                
            </div>
            </div>
        </div>
    )
}

export default DashboardCard;