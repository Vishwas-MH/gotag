import React from "react";
import "./HolidayCard.css";

const HolidayCard = (props) => {
    return(
    <>
        <div className="date-box">
            <span className="box-date">{props.date}</span>
            <span className="box-month">{props.mon}</span>
        </div>
        <div className="holiday-text">
            <span className="date-month">{props.date} {props.mon}, {props.day}</span>
            <span className="holiday-event">{props.event}</span>
        </div>
    </>
    )
}

export default HolidayCard;