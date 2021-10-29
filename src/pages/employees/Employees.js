import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Employees.css";
import icon_search from "../../assets/images/employees/icon_search.png";
import icon_arrow_up from "../../assets/images/employees/icon_arrow_up.png";
import icon_arrow_down from "../../assets/images/employees/icon_arrow_down.png";
import EmployeeCardList from "../../components/employeeCard/EmployeeCardList";
import EmployeeCard from "../../components/employeeCard/EmployeeCard";
//import TableScrollbar from 'react-table-scrollbar';
import ManagerList from "../../components/managerSelect/ManagerList";


const Employees = () => {

    const [searchTerm, setSearchTerm] = useState("");
    //let tableData = EmployeeCardList;

    const [tableData, setTableData] = useState(EmployeeCardList)

    const [visible, setVisible] = useState(10);
    const [sortOrder, setSortOrder] = useState("Asc");
    //console.log(visible);
    //console.log(tableData.length);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 10);
    }

    const tableSort = (field) => {
        if (sortOrder === "Asc") {
            const sortedData = [...tableData].sort((a, b) =>
                a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1
            );
            setTableData(sortedData);
            setSortOrder("Desc");
        }
        if (sortOrder === "Desc") {
            const sortedData = [...tableData].sort((a, b) =>
                a[field].toLowerCase() < b[field].toLowerCase() ? 1 : -1
            );
            setTableData(sortedData);
            setSortOrder("Asc");
        }
    }

    const tableSort2 = (field) => {
        if (sortOrder === "Asc") {
            const sortedData = [...tableData].sort((a, b) =>
                a[field] - b[field]
            );
            setTableData(sortedData);
            setSortOrder("Desc");
        }
        if (sortOrder === "Desc") {
            const sortedData = [...tableData].sort((a, b) =>
                b[field] - a[field]
            );
            setTableData(sortedData);
            setSortOrder("Asc");
        }
    }

    const tableSort3 = (field) => {
        if (sortOrder === "Asc") {
            const sortedData = [...tableData].sort((a, b) =>
                parseInt(a[field]) - parseInt(b[field])
            );
            setTableData(sortedData);
            setSortOrder("Desc");
        }
        if (sortOrder === "Desc") {
            const sortedData = [...tableData].sort((a, b) =>
                parseInt(b[field]) - parseInt(a[field])
            );
            setTableData(sortedData);
            setSortOrder("Asc");
        }
    }

    return (
        <section className="employees-page">
            <div className="employees-breadcrumbs">
                <Link to="/EmployeesCrumbs">
                    <span className="main-crumb">Employees&nbsp;</span>
                </Link>
                <Link to="/EmployeesCrumbs/Employees">
                    <span className="sub-crumb"> / All Employees</span>
                </Link>
            </div>
            <div className="employees-content">
                <header className="employees-content-header">
                    <span className="all-employees">All Employees ({tableData.length})</span>
                    <div className="employee-search">
                        <img className="search-icon" src={icon_search} alt=""></img>
                        <input
                            className="search-box"
                            type="text"
                            value={searchTerm}
                            placeholder="Search by Employee ID, Name, Email etc"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        ></input>
                    </div>
                </header>
                <div className="employee-table-container">
                    <table className="employee-table">
                        <thead className="employee-table-header">
                            <tr className="table-header-row">
                                <th className="table-header-empID" onClick={() => tableSort2("emp_id")}>
                                    <div className="th-elements">
                                        <span className="header-name">EMP. ID</span>
                                        <div className="sort-buttons">
                                            <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                            <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                        </div>
                                    </div>
                                </th>
                                <th className="table-header-name-email" onClick={() => tableSort("emp_name")}>
                                    <div className="th-elements">
                                        <span className="header-name">NAME / EMAIL</span>
                                        <div className="sort-buttons">
                                            <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                            <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                        </div>
                                    </div>
                                </th>
                                <th className="table-header-role" onClick={() => tableSort("emp_role")}>
                                    <div className="th-elements">
                                        <span className="header-name">ROLE</span>
                                        <div className="sort-buttons">
                                            <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                            <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                        </div>
                                    </div>
                                </th>
                                <th className="table-header-mobile" onClick={() => tableSort3("emp_mob")}>
                                    <div className="th-elements">
                                        <span className="header-name">MOBILE</span>
                                        <div className="sort-buttons">
                                            <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                            <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                        </div>
                                    </div>
                                </th>
                                <th className="table-header-join-date" onClick={() => tableSort("emp_date")}>
                                    <div className="th-elements">
                                        <span className="header-name">JOIN DATE</span>
                                        <div className="sort-buttons">
                                            <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                            <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                        </div>
                                    </div>
                                </th>
                                <th className="table-header-manager">
                                    <div className="th-elements">
                                        <span className="header-name">MANAGER</span>
                                        <div className="sort-buttons">
                                            <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                            <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                        </div>
                                    </div>
                                </th>
                                <th className="table-header-actions">
                                    <div className="th-elements">
                                        <span className="header-name">ACTIONS</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                    {/* <TableScrollbar> */}
                    <div className="scroll-div">
                        <table className="employee-table">
                            {/* <thead className="employee-table-header">
                                <tr className="table-header-row">
                                    <th className="table-header-empID">
                                        <div className="th-elements">
                                            <span className="header-name">EMP. ID</span>
                                            <div className="sort-buttons">
                                                <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                                <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="table-header-name-email">
                                        <div className="th-elements">
                                            <span className="header-name">NAME / EMAIL</span>
                                            <div className="sort-buttons">
                                                <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                                <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="table-header-role">
                                        <div className="th-elements">
                                            <span className="header-name">ROLE</span>
                                            <div className="sort-buttons">
                                                <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                                <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="table-header-mobile">
                                        <div className="th-elements">
                                            <span className="header-name">MOBILE</span>
                                           <div className="sort-buttons">
                                                <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                                <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="table-header-join-date">
                                        <div className="th-elements">
                                            <span className="header-name">JOIN DATE</span>
                                            <div className="sort-buttons">
                                                <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                                <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="table-header-manager">
                                        <div className="th-elements">
                                            <span className="header-name">MANAGER</span>
                                            <div className="sort-buttons">
                                                <img className="sort-icon" src={icon_arrow_up} alt="" ></img>
                                                <img className="sort-icon" src={icon_arrow_down} alt="" ></img>
                                            </div>
                                        </div>
                                    </th>
                                    <th className="table-header-actions">
                                        <div className="th-elements">
                                            <span className="header-name">ACTIONS</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead> */}
                            <tbody className="table-body">
                                {tableData.filter((val) => {
                                    if (searchTerm === "") {
                                        return val
                                    }
                                    else if (val.emp_name.toLowerCase().includes(searchTerm.toLowerCase())
                                        || val.emp_id.toLowerCase().includes(searchTerm.toLowerCase())
                                        || val.emp_mail.toLowerCase().includes(searchTerm.toLowerCase())
                                        || val.emp_role.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val
                                    }
                                    return null;
                                }).slice(0, visible).map((emps) => {
                                    return (
                                        <tr className="employee-body-row" key={emps.id}>
                                            <EmployeeCard
                                                pfp={emps.pfp}
                                                emp_name={emps.emp_name}
                                                emp_id={emps.emp_id}
                                                emp_mail={emps.emp_mail}
                                                emp_role={emps.emp_role}
                                                emp_mob={emps.emp_mob}
                                                emp_date={emps.emp_date}
                                                options={ManagerList}
                                            />
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        {visible < tableData.length && (
                            <div className="table-bottom" onClick={showMoreItems}>
                                <button className="paginate-button">
                                    <span className="show-more">Show more</span>
                                </button>
                            </div>
                        )
                        }
                    </div>
                    {/* </TableScrollbar> */}
                </div>
            </div>
            <div className="employees-footer">
                <button className="cancelBtn">CANCEL</button>
                <button className="saveBtn">SAVE</button>
            </div>
        </section>
    );
}

export default Employees;