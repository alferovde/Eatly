import React from "react";
import MyButton from "../../MyComponents/MyButton/MyButton";

const LoginComponent = () => {
  return (
    <div>
      <MyButton className="button__transparent_sans_border">Login</MyButton>
      <MyButton className="button__color">Sign Up</MyButton>
    </div>
  );
};

export default LoginComponent;
