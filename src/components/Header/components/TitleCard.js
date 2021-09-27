import React from "react";
import { FaBars } from "react-icons/fa";

const TitleCard = ({ data }) => {
 
  return (
    <>
      {data !== "undefined" && (
        <div
          className="d-flex align-items-center p-2"
          style={{ background: "#F3F3F3" }}
        >
          <FaBars  style={{color:'grey'}}/>
          <div className="d-flex flex-column justify-content-center align-items-center" style={{paddingLeft:'10px', paddingRight:'10px'}} >
            <span style={{color:'grey', fontSize:'14px',fontWeight:'bold'}}>{data.text1}</span>
            <span>
              <span style={{color:'grey', fontWeight:'bold', fontSize:'20px'}}>$</span>
              <span style={{color:'#0A95FF',fontSize:'22px',fontWeight:'bold'}}>{data.price}</span>
            </span>
          </div>
          <div className="d-flex flex-column">
            <span style={{color:'#367F2E', fontSize:'22px',fontWeight:'bold'}}>iShares</span>
            <span style={{paddingLeft:'20px',paddingTop:'0px', fontSize:'10px', fontWeight:'bolder'}}>by BlackRock</span>
            <span style={{ fontSize:'18px',fontWeight:'bold'}}>{data.text4}</span>
            <span style={{color:'grey',fontSize:'12px',fontWeight:'bold'}}>{data.text5}</span>
          </div>
        </div>
      )}
    </>
  );
};
export default TitleCard;
