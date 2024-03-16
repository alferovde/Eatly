import React from "react";
import "./progressbar.scss";
const ProgressBar = ({ style }) => {
  return (
    <div
      className="progressbar__wrapper"
      style={{ backgroundColor: `#${style.backGroundColor}50` }}
    >
      <div
        className="progress"
        style={{
          width: `${style.width}`,
          backgroundColor: `#${style.backGroundColor}`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
