import React from "react";
// import Modal from "../../components/modal/Modal";
// import ManagerList from "../../components/managerSelect/ManagerList";
// import icon_search from "../../assets/images/employees/icon_search.png";

const Assets = () => {

    // const [isOpen, setIsOpen] = useState(false);
    // const [searchTerm2, setSearchTerm2] = useState("");
    // const [selected, setSelected] = useState("");

    // return (
    //     <section className="mainContent-2">
    //         <div>{selected}</div>
    //         <button onClick={() => setIsOpen(true)}>Open Modal</button>
    //         <Modal open={isOpen} onClose={() => setIsOpen(false)}>
    //         <div className="modal-header">Select a manager</div>
    //             <div className="input-box-container">
    //             <img className="manager-search-icon" src={icon_search} alt=""></img>
    //             <input
    //                 className="search-box-2"
    //                 type="text"
    //                 value={searchTerm2}
    //                 placeholder="Search"
    //                 onChange={(e) => setSearchTerm2(e.target.value)}
    //             ></input>
    //             </div>
    //             <ul className="modal-list">
    //             <li key={0} onClick={() => setSelected("")}> none </li>
    //             {ManagerList.filter((val) => {
    //                 if(searchTerm2 === ""){
    //                     return val;
    //                 }
    //                 else if(val.manager.toLowerCase().includes(searchTerm2.toLowerCase())){
    //                     return val;
    //                 }
    //                 return null;
    //             }).map((mngs) => {
    //                 return (
    //                     <li onClick={() => setSelected(mngs.manager)} key={mngs.id}>{mngs.manager} <span>+</span></li>
    //                 )
    //             })}
    //             </ul>
    //         </Modal>
    //     </section>

    return(
        <section className="mainContent-2">Assets</section>
    )
}

export default Assets;