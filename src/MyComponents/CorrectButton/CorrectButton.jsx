import React from "react";
import "./correctbutton.scss";

const CorrectButton = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default CorrectButton;
