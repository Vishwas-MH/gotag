import React, { useState } from "react";
import './Navbar.css';
import NavCard from "../navCard/NavCard";
import NavCardList from "../navCard/NavCardList";

const Navbar = () => {

    const [selected, setSelected] = useState(1);

    //console.log(selected);

    return (
        <ul className="navBar">
            {NavCardList.map((navList) => {
                return (
                    <li key={navList.id}  onClick={() => setSelected(navList.id)} id={selected === navList.id ? "NavActive" : null}>
                    <NavCard
                        icons={navList.icon}
                        cardText={navList.cardText}
                        cardText2={navList.cardText2}
                    />
                    </li>
                )
            })}
        </ul>
    );
};

export default Navbar;