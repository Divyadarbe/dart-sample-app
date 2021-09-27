import React from "react";
import { connect } from "react-redux";
import TitleCard from "./components/TitleCard";
import DataCard from "./components/DataCard";
import MarketCard from "./components/MarketCard";
import CustomButton from "./components/CustomButton";
import CustomChart from "./components/CustomChart";
import RealizedCard from "./components/RealizedCard";

const Header = ({ data }) => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-9">
          {data.length > 0 &&
            data.map((d) => (
              <div
                className="d-flex header-card"
                key={d.id}
                style={{
                  marginBottom: "10px",
                  width: "100%",
                  boxShadow: "0 2px 3px -1px rgba(0, 0, 0, 0.25)",
                }}
              >
                <TitleCard data={d.first_box} />
                <DataCard data={d.second_box} />
                <MarketCard data={d.third_box} />
                <RealizedCard data={d.fourth_box} />
                <div
                  className="d-flex flex-column justify-content-between button-card"
                  style={{ width: "10%", paddingRight: "10px" }}
                >
                  <div style={{ marginTop: "10px" }}>
                    <CustomButton label={`BUY`} />
                  </div>
                  <div style={{ marginBottom: "10px",marginTop:'5px' }}>
                    <CustomButton label={`SELL`} />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="col-lg-3">
          <CustomChart />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.headerData,
  };
};
export default connect(mapStateToProps)(Header);
