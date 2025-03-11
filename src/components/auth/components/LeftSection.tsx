import React from "react";
import leftImg from "../../assets/auth_image.svg";
import "../auth.css"; // Import the CSS file

const LeftSection: React.FC = () => {
  return (
    <div className="w-50 d-flex flex-column justify-content-center align-items-center text-white p-5 left-section">
      <h1 className="fw-bold">The simplest way to manage your business</h1>
      <p>Enter your credentials to access your account</p>
      <img src={leftImg} alt="Dashboard Preview" className="img-fluid" />
    </div>
  );
};

export default LeftSection;
