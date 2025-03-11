import React from "react";
import massLogo from "../../assets/mass-logo.svg";
import { Link } from "react-router-dom";
import "../auth.css"; // Import the CSS file

interface RightSectionProps {
  // Define props here
  title: string;
  subTitle: string;
  children: React.ReactNode;
  linkText: string;
  linkTo: string;
}

const RightSection = ({
  title,
  subTitle,
  children,
  linkText,
  linkTo,
}: RightSectionProps) => {
  return (
    <div className="w-50 d-flex flex-column justify-content-center align-items-center p-5 right-section">
      <img src={massLogo} alt="Logo" className="me-2 logo" width="40" />
      <div className="d-flex align-items-center mb-3"></div>
      <h2 className="fw-bold">{title}</h2>
      <p className="text-muted">{subTitle}</p>
      {children}

      {/* Clickable Sign In / Sign Up Link */}
      <p className="mt-3">
        <Link to={linkTo} className="text-warning fw-bold">
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default RightSection;
