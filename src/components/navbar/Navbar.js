import React from "react";
import './Navbar.css';
import NavCard from "../navCard/NavCard";
import NavCardList from "../navCard/NavCardList";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

const Navbar = (props) => {

    //console.log(selected);
    //console.log(props.open);
    return (
        <div className="navBarContainer" id={props.open ? "side_menu_active" : "side_menu"}>
            <OutsideClickHandler>
        <ul className="navBar">
            {NavCardList.map((navList) => {
                return (
                    <li key={navList.id} onClick={() => props.setSelected(navList.id)} id={props.selected === navList.id ? "NavActive" : null}>
                        <Link to={`${navList.path}`}>
                            <NavCard
                                icons={navList.icon}
                                cardText={navList.cardText}
                                cardText2={navList.cardText2}
                            />
                        </Link>

                    </li>
                )
            })}
        </ul>
        </OutsideClickHandler>
        </div>
    );
};

export default Navbar;