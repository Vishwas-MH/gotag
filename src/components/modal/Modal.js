import React from "react";
import "./Modal.css";
import OutsideClickHandler from "react-outside-click-handler";

const Modal = ({ open, children, onClose }) => {
    if (!open) {
        return null;
    }
    return (
        
        <div className="modal">
            <OutsideClickHandler onOutsideClick={onClose}>
            {children}
            </OutsideClickHandler>
        </div>
        
    )
}

export default Modal;