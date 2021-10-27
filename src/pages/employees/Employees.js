import React from "react";
import { useState } from "react";
import "./Employees.css";
import icon_search from "../../assets/images/employees/icon_search.png";

const Employees = () => {

    // const [searchInput, setSearchInput] = useState("");
    // const newRef = useRef("");
    const [query, setQuery] = useState("")

    return (
      <section className="employees-page">
        <div className="employees-breadcrumbs">
          <span className="main-crumb">Employees&nbsp;</span>
          <span className="sub-crumb"> / All Employees</span>
        </div>
        <div className="employees-content">
          <header className="employees-content-header">
            <span className="all-employees">All Employees (90)</span>
            <div className="employee-search">
              <img className="search-icon" src={icon_search} alt=""></img>
              <input
                className="search-box"
                type="text"
                value={query}
                placeholder="Search by Employee ID, Name, Email etc"
                onChange={e => setQuery(e.target.value)}
              ></input>
            </div>
          </header>
          <div className="employee-table-container">

          </div>
        </div>
        {/* <div className="employees-footer">
                <button className="cancelBtn">CANCEL</button>
                <button className="saveBtn">SAVE</button>
            </div> */}
      </section>
    );
}

export default Employees;