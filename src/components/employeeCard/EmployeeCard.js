import React, { useState } from "react";
//import { useRef, useEffect, useCallback } from "react";
import "./EmployeeCard.css";
import icon_employee_profile from "../../assets/images/employees/icon_employee_profile.png"
import icon_actions from "../../assets/images/employees/icon_actions.png"
//import ManagerSelect from "../managerSelect/ManagerSelect";
import Modal from "../modal/Modal";
import ManagerList from "../../components/managerSelect/ManagerList";
import icon_search from "../../assets/images/employees/icon_search.png";
import icon_arrow_down from "../../assets/images/employees/icon_arrow_down.png";

const EmployeeCard = (props) => {
    //console.log(props.options);

    //const [value, setValue] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm2, setSearchTerm2] = useState("");
    const [selected, setSelected] = useState("");

    // const ref = useRef(null);
    
    // const close = useCallback(
    //     () => {
    //         if (isOpen === true)
    //             setIsOpen(false);
    //     }, [isOpen]
    // )

    // useEffect(() => {
    //     document.addEventListener("click", close);
    //     return () => document.removeEventListener("click", close);
    // }, [close]);


    //console.log(selected);

    return (
        <>
            <td className="table-row-empID" >
                <div className="image-and-id">
                    <img className="id-image" src={icon_employee_profile} alt=""></img>
                    <span className="emp-id-row">#{props.emp_id}</span>
                </div>
            </td>
            <td className="table-row-name-email">
                <div className="name-and-email">
                    <span className="emp-name">{props.emp_name}</span>
                    <span className="emp-email">{props.emp_mail}</span>
                </div>
            </td>
            <td className="table-row-role">
                <span className="overflow">{props.emp_role}</span>
            </td>
            <td className="table-row-mobile">{props.emp_mob}</td>
            <td className="table-row-join-date">{props.emp_date}</td>
            <td className="table-row-manager">
                <div className="manager-overlay">
                    {!selected ?
                        (<span className="manager-display" onClick={() => setIsOpen(true)}>select<span><img className="manager-drop-arrow" src={icon_arrow_down} alt=""></img></span></span>
                        ) : (
                            <span className="manager-blue manager-display" onClick={() => setIsOpen(true)}>{selected}<span><img className="manager-drop-arrow" src={icon_arrow_down} alt=""></img></span></span>
                        )}
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                        <div className="modal-header" onClick={() => setIsOpen(false)}>Select a manager</div>
                        <div className="input-box-container">
                            <img className="manager-search-icon" src={icon_search} alt=""></img>
                            <input
                                className="search-box-2"
                                type="text"
                                value={searchTerm2}
                                placeholder="Search"
                                onChange={(e) => setSearchTerm2(e.target.value)}
                            ></input>
                        </div>
                        <ul className="modal-list">
                            <li key={0} onClick={() => { setSelected(""); setIsOpen(false); }}> none </li>
                            {ManagerList.filter((val) => {
                                if (searchTerm2 === "") {
                                    return val;
                                }
                                else if (val.manager.toLowerCase().includes(searchTerm2.toLowerCase())) {
                                    return val;
                                }
                                return null;
                            }).map((mngs) => {
                                return (
                                    <li onClick={() => { setSelected(mngs.manager); setIsOpen(false); }} key={mngs.id}>{mngs.manager} <span>+</span></li>
                                )
                            })}
                        </ul>
                    </Modal>
                </div>
            </td>
            <td className="table-row-actions">
                <img className="actions-image" src={icon_actions} alt=""></img>
            </td>
        </>
    );
};

export default EmployeeCard;