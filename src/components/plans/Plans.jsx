import React from "react";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
const Plans = () => {
  return (
    <div className="plans-container" id="plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      <div className="plans">
        {plansData.map((data, i) => (
          <div className="plan" key={i}>
            {data.icon}
            <span>{data.name}</span>
            <span>{data.price}</span>
            <div className="features">
              {data.features.map((featureData, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{featureData}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits {"->"} </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
