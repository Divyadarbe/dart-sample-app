import React from "react";
import { FaCaretDown, FaCaretUp, FaExclamationTriangle } from "react-icons/fa";
import "./style.css";

const RealizedCard = ({ data }) => {
  return (
    <div
      className="p-2 d-flex flex-column justify-content-center title-card"
      style={{
        height: "120px",
        background: "#F3F3F3",
        marginRight: "5px",
        width: "20%",
      }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <span style={{ fontSize: "12px", fontWeight: "500" }}>
          Unrealized P/L{" "}
        </span>
        <span
          className="text-right"
          style={{ fontSize: "12px", fontWeight: "500" }}
        >
          {data.unrealized}
        </span>
      </div>
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ paddingTop: "5px", marginBottom: "5px" }}
      >
        <span style={{ color: "gray", fontSize: "12px", fontWeight: "500" }}>
          % return
        </span>
        <span
          style={{
            fontSize: "12px",
            fontWeight: "500",
            marginLeft: "25px",
            textAlign: "right",
          }}
        >
          {console.log("Data return", data.return >= 0, data.return)}
          {data.return >= 0 ? (
            <FaCaretUp color="green" />
          ) : (
            <FaCaretDown color="red" />
          )}
          {data.return}%
        </span>
      </div>
      <div>
        {data.return > 0 ? (
          <div className="progress progress-middle">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${data.return}%`, background: "green" }}
            ></div>
          </div>
        ) : (
          <div className="progress progress-middle1">
            <div
              className="progress-bar"
              role="progressbar"
              // aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${-data.return}%`, background: "red" }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};
export default RealizedCard;
