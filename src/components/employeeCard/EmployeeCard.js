import React, { useState } from "react";
//import { useRef, useEffect, useCallback } from "react";
import "./EmployeeCard.css";
import icon_employee_profile from "../../assets/images/employees/icon_employee_profile.png"
import icon_actions from "../../assets/images/employees/icon_actions.png"
//import ManagerSelect from "../managerSelect/ManagerSelect";
import Modal from "../modal/Modal";
//import ManagerList from "../../components/managerSelect/ManagerList";
//import EmployeeCardList from "./EmployeeCardList";
import icon_search from "../../assets/images/employees/icon_search.png";
import icon_arrow_down from "../../assets/images/employees/icon_arrow_down.png";
import { useSelector } from "react-redux";


const EmployeeCard = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    //const [isOpen2, setIsOpen2] = useState(false);
    const [searchTerm2, setSearchTerm2] = useState("");
    const [selected, setSelected] = useState("");
    //console.log(selected);
    //const dispatch = useDispatch();
    //console.log(dispatch);
    const handleSubmit = (e) => {
        setSelected(e.emp_name);
        const data1 = [{
            id: parseInt(props.id),
            pfp: icon_employee_profile,
            emp_id: parseInt(props.emp_id),
            emp_name: props.emp_name,
            emp_mail: props.emp_mail,
            emp_role: props.emp_role,
            emp_mob: props.emp_mob,
            emp_date: props.emp_date,
            emp_manager: e.emp_name,
        }]
        
        props.setData(data1.concat(props.data));
        //dispatch({ type: "editManager", payload: data });
        setIsOpen(false);
    }


    // const handleActions = (props) => {
    //     <Modal open={isOpen2} onClose={() => setIsOpen2(false)}>
    //         Test
    //     </Modal>
    // }


    const EmployeeCardList = useSelector((state) => state.managers);
    //console.log(EmployeeCardList);

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
                {!(EmployeeCardList[props.id - 1].emp_manager) ?
                    (selected === "" ? (
                        <span className="manager-display" onClick={() => setIsOpen(true)}>select<span><img className="manager-drop-arrow" src={icon_arrow_down} alt=""></img></span></span>
                    ) :
                        (<span className="manager-blue manager-display" onClick={() => setIsOpen(true)}>{selected}<span><img className="manager-drop-arrow" src={icon_arrow_down} alt=""></img></span></span>)
                    )
                    :
                    (
                        <span className="manager-blue manager-display" onClick={() => setIsOpen(true)}>{EmployeeCardList[props.id - 1].emp_manager}<span><img className="manager-drop-arrow" src={icon_arrow_down} alt=""></img></span></span>
                    )}
                <div className="flex-container">
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                        <div className="modal-header" onClick={() => { setIsOpen(false); }}>Select a manager</div>
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
                            <li key={-1} onClick={() => { setSelected(""); setIsOpen(false); }}> none </li>
                            {EmployeeCardList.filter((val) => {
                                if (!(val.emp_name?.toLowerCase() === props.emp_name.toLowerCase())) {
                                    if (searchTerm2 === "") {
                                        return val;
                                    }
                                    else if (val.emp_name?.toLowerCase().includes(searchTerm2.toLowerCase())) {
                                        return val;
                                    }
                                }
                                return null;
                            }).map((mngs) => {
                                return (
                                    <li onClick={() => { handleSubmit(mngs); setIsOpen(false); }} key={mngs.id}>{mngs.emp_name} <span>+</span></li>
                                )
                            })}
                        </ul>
                    </Modal>
                </div>
            </td>
            <td className="table-row-actions">
                <img className="actions-image" src={icon_actions} alt=""></img>
                {/* <img className="actions-image" src={icon_actions} onClick={() => handleActions(props)} alt=""></img> */}
            </td>
        </>
    );
};

export default EmployeeCard;