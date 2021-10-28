import React from "react";
import "./EmployeeCard.css";
import icon_employee_profile from "../../assets/images/employees/icon_employee_profile.png"
import icon_actions from "../../assets/images/employees/icon_actions.png"


const EmployeeCard = (props) => {
    return (
        <>
            <td className="table-row-empID">
                <div className="image-and-id">
                    <img className="id-image" src={icon_employee_profile} alt=""></img>
                    <span className="emp-id-row">{props.emp_id}</span>
                </div>
            </td>
            <td className="table-row-name-email">
                <div className="name-and-email">
                    <span className="emp-name">{props.emp_name}</span>
                    <span className="emp-email">{props.emp_mail}</span>
                </div>
            </td>
            <td className="table-row-role">{props.emp_role}</td>
            <td className="table-row-mobile">{props.emp_mob}</td>
            <td className="table-row-join-date">{props.emp_date}</td>
            <td className="table-row-manager">select</td>
            <td className="table-row-actions">
                <img className="actions-image" src={icon_actions} alt=""></img>
            </td>
        </>
    )
};

export default EmployeeCard;