import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import validator from "validator";
import "./Employees.css";
import icon_search from "../../assets/images/employees/icon_search.png";
import icon_arrow_up from "../../assets/images/employees/icon_arrow_up.png";
import icon_arrow_down from "../../assets/images/employees/icon_arrow_down.png";
import EmployeeCardList from "../../components/employeeCard/EmployeeCardList";
import EmployeeCard from "../../components/employeeCard/EmployeeCard";
import ManagerList from "../../components/managerSelect/ManagerList";


const Employees = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [tableData, setTableData] = useState(EmployeeCardList)
    const [visible, setVisible] = useState(10);
    const [sortOrder, setSortOrder] = useState("Asc");
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    //console.log(data);

    const validate = (inputText) => {
        setSearchTerm(validator.trim(inputText));
    }

    const dispatch = useDispatch();

    const showMoreItems = () => {
        setVisible((n) => n + 10);
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
                            onChange={(e) => validate(e.target.value)}
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
                                <th className="table-header-mobile" onClick={() => tableSort2("emp_mob")}>
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
                    <div className="scroll-div">
                        <table className="employee-table">
                            <tbody className="table-body">
                                {tableData.filter((val) => {
                                    if (searchTerm === "") {
                                        return val
                                    }
                                    else if (val.emp_name.toLowerCase().includes(searchTerm.toLowerCase())
                                        || val.emp_id.toLowerCase().includes(searchTerm.toLowerCase())
                                        || val.emp_mail.toLowerCase().includes(searchTerm.toLowerCase())
                                        || val.emp_role.toLowerCase().includes(searchTerm.toLowerCase())
                                        || val.emp_manager.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val
                                    }
                                    return null;
                                }).slice(0, visible).map((emps) => {
                                    return (
                                        <tr className="employee-body-row" key={emps.id}>
                                            <EmployeeCard
                                                id={emps.id}
                                                pfp={emps.pfp}
                                                emp_name={emps.emp_name}
                                                emp_id={emps.emp_id}
                                                emp_mail={emps.emp_mail}
                                                emp_role={emps.emp_role}
                                                emp_mob={emps.emp_mob}
                                                emp_date={emps.emp_date}
                                                emp_manager={emps.emp_manager}
                                                options={ManagerList}
                                                data={data}
                                                setData={setData}
                                                data2={data2}
                                                setData2={setData2}
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
                </div>
            </div>
            <div className="employees-footer">
            <Link to="/EmployeesCrumbs">
                <button className="cancelBtn">CANCEL</button>
            </Link>
            {/* <Link to="/EmployeesCrumbs"> */}
                <button className="saveBtn" onClick={() => {
                for(var i=0; i<data.length;i++){
                    dispatch({ type: "editManager", payload: data[i] })
                }}
                    
                    }>SAVE</button>
            {/* </Link> */}
            </div>
        </section>
    );
}

export default Employees;