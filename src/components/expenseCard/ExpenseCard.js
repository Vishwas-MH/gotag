import React from "react";
import icon_reject from "../../assets/images/dashboard/icon_reject.svg";
import icon_approve from "../../assets/images/dashboard/icon_approve.svg";
import "./ExpenseCard.css"

const ExpenseCard = (props) => {
    return(
        <>
        <div className="expense-card-left">
            <div className="emp-img-id">
                <img className="emp-img" src={props.icon} alt=""></img>
                <div className="emp-id-name">
                    <span className="emp-id">{props.emp}</span>
                    <span className="emp-name">{props.name}</span>
                </div>
            </div>
            <div className="expense-details">
                <span className="expense-dates">Dates: {props.dates}</span>
                <span className="expense-comment">Comments: {props.comments}</span>
            </div>
        </div>
        <div className="expense-card-right">
            <button className="reject-button">
                <img className="reject-img" src={icon_reject} alt=""></img>
                <span className="reject-text">Reject</span>
            </button>
            <button className="approve-button">
            <img className="approve-img" src={icon_approve} alt=""></img>
                <span className="approve-text">Approve</span>
            </button>
        </div>
        </>
    )
};

export default ExpenseCard;