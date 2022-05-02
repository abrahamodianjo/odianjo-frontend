import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
function Navbar  () {
 
  return (
    <div className="navbar  navbar-expand-lg navbar-dark bg bg-dark">
      <div className="container">
      
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="navbar-brand" exact to="/">
                User Management System
              </NavLink>
            </li>
          </ul>
          <Link className="btn btn-outline-light" to="/add">Add user</Link>
      </div>
    </div>
    
  );
};

export default Navbar;
