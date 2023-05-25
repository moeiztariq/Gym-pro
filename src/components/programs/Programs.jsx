import React from "react";
import "./programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape you</span>
      </div>

      <div className="programs-category">
        {programsData.map((data) => (
          <div className="category">
            {data?.image}
            <span>{data?.heading}</span>
            <span>{data?.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
