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
        <div className="col-lg-10">
          {data.length > 0 &&
            data.map((d) => (
              <div className="row" key={d.id} style={{ paddingBottom: "10px" }}>
                <div className="col-lg-3">
                  <TitleCard data={d.first_box} />
                </div>
                <div className="col-lg-2">
                  <DataCard data={d.second_box} />
                </div>
                <div className="col-lg-3">
                  <MarketCard data={d.third_box} />
                </div>
                <div className="col-lg-3">
                  <RealizedCard data={d.fourth_box} />
                </div>
                <div className="col-lg-1">
                  <div className="d-flex flex-column">
                    <div style={{ marginTop: "10px" }}>
                      <CustomButton label={`BUY`} />
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <CustomButton label={`SELL`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
         
        </div>
        <div className="col-lg-2">
          <CustomChart/>
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
