import React from "react";
import "./EmployeesCrumb.css";
import { Link } from "react-router-dom";

const EmployeesCrumb = () => {
    return (
        <section className="employees-page">
            <div className="employees-breadcrumbs">
                <Link to="/EmployeesCrumbs">
                    <span className="main-crumb">Employees&nbsp;</span>
                </Link>
                {/* <span className="sub-crumb"> / All Employees</span> */}
            </div>
            <Link to="/EmployeesCrumbs/Employees">
                <div className="crumbs-redirect">
                    Go to All Employees
                </div>
            </Link>
        </section>
    );
}

export default EmployeesCrumb;