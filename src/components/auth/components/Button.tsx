import React from "react";
import "../auth.css"; // Import the CSS file

interface ButtonProps {
  text: string;
  color?: string;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = "primary",
  className,
  disabled,
}) => {
  return (
    <button className={`btn btn-${color} ${className}`} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
