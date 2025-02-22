import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

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