import React from "react";
import "../App.css";
import "./Testimony.css";
import ScrollableTestimony from "./testimonyScrolls/ScrollableTestimony.js";

function Testimony() {
  return (
    <div className="testimony-container">
      <div className="testimonyMain row">
        <div className="testimonyContent column">
          <div className="testimonyHeading">
            Student Results and Testimonies
          </div>
          <div className="testimonyScroller">
            <ScrollableTestimony/>
          </div>
        </div>
        <img
          src="/images/testimonyVectorArt.png"
          className="testimonyVectorArt"
          alt="testimony"
        ></img>
      </div>
    </div>
  );
}

export default Testimony;
