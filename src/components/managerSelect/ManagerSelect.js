import React, { useState, useRef, useEffect } from "react";
//import SelectSearch from 'react-select-search';
//import ManagerList from "./ManagerList";
import "./ManagerSelect.css";

const ManagerSelect = ({ options, prompt, value, onChange }) => {
    //console.log(options2);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, []);

    function close(e) {
        setOpen(e && e.target === ref.current);
    }
    //console.log(ManagerList);

    function filter2(options) {
        return options.filter(option => option.manager.toLowerCase().indexOf(query.toLowerCase()) > -1)
    }

    function displayValue() {
        if (query.length > 0)
            return query;
        if (value) return value.manager;
        return "";
    }

    return (
        <div className="dropdown">
            <div className="control" onClick={() => setOpen((prev) => !prev)}>
                <div className="selected-value">
                    {/* {value ? value.manager : prompt} */}
                    <input
                        type="text"
                        ref={ref}
                        placeholder={value ? value.manager : prompt}
                        value={displayValue()}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            onChange(null);
                        }}
                        onClick={() => setOpen((prev) => !prev)}
                    />
                </div>
                <span className={`arrow ${open ? "open" : null}`}></span>
            </div>
            <div className={`options ${open ? "open" : null}`}>
                <div className="option"> none </div>
                {filter2(options).map((items) => (
                    <div
                        className={`option ${value === items ? "selected" : null} `}
                        key={items.id}
                        onClick={() => {
                            setQuery("");
                            onChange(items);
                            setOpen(false);
                        }}
                    >
                        {items.manager}

                        <span className="plus-mark"> + </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagerSelect;
