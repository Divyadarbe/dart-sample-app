import React from "react";
import "./style.css";
const CustomButton = ({ label }) => {
  return (
    <div>
      <button
        type="button"
        className="btn "
        style={{ width: "100%", border: "1px solid #FF4433", color: "#FF4433" }}
      >
        {label}
      </button>
    </div>
  );
};
export default CustomButton;
