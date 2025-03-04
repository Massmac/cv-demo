import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { auth, db } from "../auth/Firebase";

/*
 Author: Michael Tamatey
 Date: 20250222
 Description: Navbar
*/

const Navbar = () => {
  async function handleLogout() {
    try{
      await auth.signOut();
       window.location.href ="/signin"
    }catch(e){
      console.e("Erroe logging out:")
    }
  }
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/mainpage" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link" onClick={handleLogout}>Log out</Link>
          </li>
          <li className="nav-item">
            <Link to="/reports" className="nav-link">Reports</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;