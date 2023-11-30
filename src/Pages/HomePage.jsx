import React from "react";
import { NavLink } from "react-router-dom";
import PageNav from "../Components/PageNav";
import AppNav from "../Components/AppNav";

const HomePage = () => {
  return (
    <div>
          <h1>Home</h1>
          
          <PageNav />
          <AppNav />
          
          <NavLink to="/app">Go to the App</NavLink>
    
    </div>
  );
};

export default HomePage;
