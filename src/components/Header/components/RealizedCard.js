import React, { useEffect } from "react";
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
      <div style={{ width: "100%" }} className="d-flex">
        <div className="progress justify-content-end" style={{ width: "50%" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${data.return < 0 && -data.return}%`,
              background: "red",
            }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="progress" style={{ width: "50%" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${data.return >= 0 && data.return}%`,
              background: "green",
            }}
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default RealizedCard;
