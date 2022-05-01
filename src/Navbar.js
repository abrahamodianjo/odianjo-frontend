import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="navbar-brand" exact to="/">
                User Management System
              </NavLink>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
