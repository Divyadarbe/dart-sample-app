import React from "react";
import { FaCaretDown, FaExclamationTriangle } from "react-icons/fa";
// import "./chart.css"

const RealizedCard = ({ data }) => {
  return (
    <div
      className="p-2 d-flex flex-column justify-content-center"
      style={{ height: "100%", background: "#F3F3F3" }}
    >
      <div className="d-flex">
        <span style={{ fontSize: "12px", fontWeight: "500" }}>
          Unrealized P/L{" "}
        </span>
        <span
          style={{ fontSize: "12px", fontWeight: "500", marginLeft: "10px" }}
        >
          ${data.unrealized}
        </span>
      </div>
      <div className="d-flex" style={{ paddingTop: "5px" }}>
        <span style={{ color: "gray", fontSize: "12px", fontWeight: "500" }}>
          % return
        </span>
        <span
          style={{ fontSize: "12px", fontWeight: "500", marginLeft: "20px" }}
        >
          <FaCaretDown color={data.return > 0 ? `green` : `red`} />
          {data.return}%
        </span>
      </div>
      <div>
      
        {data.return==10  ? (
          <div className="progress progress-middle">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${data.return}%` }}
            ></div>
          </div>
        ) : (
          <div className="progress progress-middle1">
            <div
              className="progress-bar1"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: '15%' }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};
export default RealizedCard;
