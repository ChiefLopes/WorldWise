import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

import Logo from "./Logo"; // Adjust the path based on the actual location of the Logo component

const PageNav = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PageNav;
