import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


/*
 Author: Michael Tamatey
 Date: 20250222
 Description: Layout class
*/

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet /> {/* This will render the current page's content */}
      </div>
    </>
  );
};

export default Layout;