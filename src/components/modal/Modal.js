import React from "react";
import "./Modal.css"

const Modal = ({ open, children, onClose }) => {
    if (!open) {
        return null;
    }
    return (
        
        <div className="modal">
            <div className="modal-contents">
                <div className="modal-children">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;