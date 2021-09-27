import React, { useState, useEffect } from "react";
import DonutChart from "react-donut-chart";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import {
  FaSquare,
  FaSquareQuarters,
  FaLastfmSquare,
  FaIntercom,
  FaGgCircle,
  FaExpandArrowsAlt,
  FaCaretDown,
} from "react-icons/fa";

import "./style.css";

const CustomChart = ({ data }) => {
  const [mutualFund, setMututalFund] = useState(0);
  const [etFund, setEtFund] = useState(0);
  useEffect(() => {
    let temp1 = 0;
    let temp2 = 0;
    let total_sum = 0;
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        total_sum = total_sum + data[i].quantity * data[i].price;
        if (i <= 3) {
          temp1 = temp1 + data[i].quantity * data[i].price;
        }
        if (i >= 4 && i < 6) {
          temp2 = temp2 + data[i].quantity * data[i].price;
        }
      }
      let k = (temp1 * 100) / total_sum;
      let l = (temp2 * 100) / total_sum;
      setEtFund(l);
      setMututalFund(k);
    }
  }, []);
  return (
    <div className="d-flex flex-column">
     
      <div style={{ marginTop: "10px" }}>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ marginBottom: "10px" }}
        >
          <span style={{ fontSize: "16px", fontWeight: "bold" }}>
            Portfolio
          </span>
          <span>
            Assetwise
            <FaCaretDown />
          </span>
        </div>
        <DonutChart
          className="dchart"
          width={300}
          height={250}
          innerRadius={0.9}
          selectedOffset={0}
          outerRadius={0.7}
          colors={["#0A95FF", "#466D1D"]}
          data={[
            {
              label: "MF",
              value: mutualFund,
            },
            {
              label: "ETFs",
              value: etFund,
            },
          ]}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
export default connect(mapStateToProps)(CustomChart);
