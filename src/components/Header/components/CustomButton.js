import React from "react";

const CustomButton = ({ label }) => {
  return (
    <div>
      <button type="button" className="btn btn-outline-warning" style={{width:'100%'}}>
        {label}
      </button>
    </div>
  );
};
export default CustomButton;
