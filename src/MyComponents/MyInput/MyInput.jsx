import React from "react";
import "./myinput.scss";
const MyInput = (props) => {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      type={props.type}
      onChange={(e) => props.onChange(e, props.id)}
      style={props.style}
    />
  );
};

export default MyInput;
