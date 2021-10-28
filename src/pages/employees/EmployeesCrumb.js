import React from "react";
import "./EmployeesCrumb.css";
import { Link } from "react-router-dom";

const EmployeesCrumb = () =>{
    return(
        <section className="employees-page">
        <div className="employees-breadcrumbs">
            <span className="main-crumb">Employees&nbsp;</span>
            {/* <span className="sub-crumb"> / All Employees</span> */}
        </div>
        <div className="crumbs-redirect">
            <Link to="/Employees">
                Go to All Employees
            </Link>
        </div>
        </section>
    );
}

export default EmployeesCrumb;