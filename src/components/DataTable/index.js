import React from "react";
import { connect } from "react-redux";
import {Table} from 'react-bootstrap'

const DataTable = ({ data }) => {
  return (
    <table className="table table-bordered table-hover" width="100%">
      <thead>
        <tr>
          <th>Scrip</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Avg. Cost</th>
          <th>Invested Amount</th>
          <th>% of Portfolio Value</th>
          <th>Unrealized P & L</th>
          <th>% Return</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((d) => (
            <tr key={d.id}>
              <td>{d.scrip}</td>
              <td style={{ textAlign: "right" }}>{d.quantity}</td>
              <td>${d.price}</td>
              <td style={{ textAlign: "right" }}>${d.avg_cost}</td>
              <td style={{ textAlign: "right" }}>${d.invested_amount}</td>
              <td style={{ textAlign: "right" }}>{d.portfolio_value}%</td>
              <td style={{ textAlign: "right" }}>{d.unrealized}</td>
              <td style={{ textAlign: "right" }}>{d.return}%</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No Data Found!!</td>
          </tr>
        )}
      </tbody>
    </table>
  
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
export default connect(mapStateToProps)(DataTable);
