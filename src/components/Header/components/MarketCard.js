import React from "react";

const MarketCard = ({ data }) => {
  return (
    <div className="p-2 d-flex flex-column justify-content-center" style={{ height: "100%", background: "#F3F3F3" }}>
      <div className="d-flex">
        <span style={{  fontSize: "12px", fontWeight: "500"}}>Market Value</span>
        <span style={{ fontSize: "12px", fontWeight: "500",marginLeft:'10px' }}>${data.market_value}</span>
      </div>
      <div className="d-flex" style={{paddingTop: "5px"}}>
        <span style={{ color: "gray", fontSize: "12px", fontWeight: "500" }}>% of portfolio value</span>
        <span style={{  fontSize: "12px", fontWeight: "500",marginLeft:'10px' }}>{data.portfolio_value}%</span>
      </div>
      <div>
        <div className="progress" style={{marginTop: "5px"}}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${data.portfolio_value}%`,background:'green' }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default MarketCard;
