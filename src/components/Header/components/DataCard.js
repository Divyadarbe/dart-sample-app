import React from "react";
import {
  FaSquare,
  FaSquareQuarters,
  FaLastfmSquare,
  FaIntercom,
  FaGgCircle,
} from "react-icons/fa";
import "./style.css";

const DataCard = ({ data }) => {
  return (
    <div
      className="d-flex align-items-center p-2 title-card"
      style={{ height: "120px", background: "#F3F3F3",marginLeft:'5px',marginRight:'5px',width:'20%' }}
    >
      <div className="d-flex flex-column" style={{ paddingRight: "5px" }}>
        <span style={{ color: "gray", fontSize: "12px", fontWeight: "500" }}>
          <FaLastfmSquare color="grey"  />{" "}
          Quantity
        </span>
        <span
          style={{
            color: "gray",
            fontSize: "12px",
            fontWeight: "500",
            paddingTop: "5px",
          }}
        >
          <FaIntercom color="grey" style={{ marginRight: "3px" }} />
          Avg. Cost
        </span>
        <span
          style={{
            color: "gray",
            fontSize: "12px",
            fontWeight: "500",
            paddingTop: "5px",
          }}
        >
          <FaGgCircle color="grey" style={{ marginRight: "3px" }} />
          Invested Amt
        </span>
      </div>
      <div className="d-flex flex-column">
        <span style={{ fontSize: "12px", fontWeight: "bold" }}>
          {data.quantity}
        </span>
        <span
          style={{ fontSize: "12px", fontWeight: "bold", paddingTop: "5px" }}
        >
          ${data.cost}
        </span>
        <span
          style={{ fontSize: "12px", fontWeight: "bold", paddingTop: "5px" }}
        >
          ${data.invested_amount}
        </span>
      </div>
    </div>
  );
};
export default DataCard;
