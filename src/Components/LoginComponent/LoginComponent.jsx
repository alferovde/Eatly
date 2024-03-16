import React from "react";

import CorrectButton from "../../MyComponents/CorrectButton/CorrectButton";

const LoginComponent = ({ setLoginModalHidden, loginModalHidden }) => {
  const handlerOpenModalLogin = () => {
    setLoginModalHidden(!loginModalHidden);
  };

  return (
    <div className="loginComponent">
      <CorrectButton
        className="button__transparent_sans_border"
        onClick={handlerOpenModalLogin}
      >
        Login
      </CorrectButton>

      <CorrectButton className="button__color" onClick={handlerOpenModalLogin}>
        Sign Up
      </CorrectButton>
    </div>
  );
};

export default LoginComponent;
