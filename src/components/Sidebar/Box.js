import React from "react";
import "./Box.css";

const Box = ({ active, BoxName }) => {
  return (
    <div
      className={`box m-2 border-0 ${
        BoxName === active ? "box-shadow" : ""
      } d-flex p-2`}
    >
      <div className="box-body m-auto">
        <div className="image d-flex">
          <img className="mx-auto" src={`/Assets/${BoxName}.svg`} alt="" />
        </div>
        <span>{BoxName}</span>
      </div>
    </div>
  );
};

export default Box;
