import React from "react";
import styles from "./AppNav.module.css"
import { NavLink } from "react-router-dom";


const AppNav = () => {
    return <nav className={styles.nav}>
        <ul>
            <li>
                {/* Leads to the city route */}
                <NavLink to="cities">Cities</NavLink>
            </li>
            <li>
                <NavLink to="countries">Countries</NavLink>
            </li>
            {/* <li>
                <NavLink to="form">Form</NavLink>
            </li> */}
       </ul>
        
  </nav>;
};

export default AppNav;
