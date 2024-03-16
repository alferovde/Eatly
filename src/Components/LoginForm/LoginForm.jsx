import React, { useState, useEffect } from "react";
import "./loginform.scss";
import MyInput from "../../MyComponents/MyInput/MyInput";

import {
  google,
  apple,
  logo_simple,
  userIcon,
  emailIcon,
  passwordIcon,
  glazIcon,
  glazIconOpen,
  pattern,
} from "../../Store/sprite";
import hero_img from "../../Image/hero_img.png";
import SVGimage from "../../MyComponents/SVGimage/SVGimage";
import { usersArray } from "../../Store/store";
import CorrectButton from "../../MyComponents/CorrectButton/CorrectButton";
const LoginForm = ({ setLoginModalHidden, loginModalHidden }) => {
  const clodeModalLogin = (e) => {
    e.preventDefault();
    setLoginModalHidden(!loginModalHidden);
  };

  const [showPassord, setShowPasword] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const [buttonLoginStyle, setButtonLoginStyle] = useState("");

  const handlerSetCurrentUser = (e, type) => {
    if (type === "name")
      setCurrentUser({ ...currentUser, name: e.target.value });
    if (type === "email")
      setCurrentUser({ ...currentUser, email: e.target.value });
    if (type === "password")
      setCurrentUser({ ...currentUser, password: e.target.value });
  };

  const handlerSendUser = () => {
    let findUser = false;
    usersArray.forEach((user) => {
      if (
        user.email === currentUser?.email &&
        user.password === currentUser?.password
      ) {
        findUser = true;
        setButtonLoginStyle("animate__flash");
        setTimeout(() => {
          setLoginModalHidden(!loginModalHidden);
        }, 1500);
      } else if (!findUser) {
        setButtonLoginStyle("animate__shakeX");
      }
    });

    setTimeout(() => {
      setButtonLoginStyle("");
    }, 1000);
  };

  return (
    <div className="login-modal__continer" onClick={(e) => clodeModalLogin(e)}>
      <div
        className="login__wrapper animate__animated animate__fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="closeModalLogin"
          onClick={(e) => clodeModalLogin(e)}
        ></div>

        <div className="loginModal__left">
          <div className="loginModal__logo">
            <SVGimage src={logo_simple} />
          </div>
          <h2>Sign Up To eatly</h2>
          <div className="loginModal__form">
            <div className="form__social">
              <CorrectButton>
                <SVGimage src={google} />
              </CorrectButton>
              <CorrectButton>
                <SVGimage src={apple} />
              </CorrectButton>
            </div>
            <span>OR</span>
            <div className="modal__input">
              <div className="modal__name">
                <SVGimage src={userIcon} />
                <MyInput
                  placeholder={"Full Name"}
                  onChange={handlerSetCurrentUser}
                  id={"name"}
                />
              </div>
              <div className="modal__email">
                <SVGimage src={emailIcon} />
                <MyInput
                  placeholder={"email"}
                  onChange={handlerSetCurrentUser}
                  id="email"
                />
              </div>
              <div className="modal__password">
                <SVGimage src={passwordIcon} />
                <MyInput
                  placeholder={"password"}
                  type={!showPassord ? "password" : undefined}
                  onChange={handlerSetCurrentUser}
                  id="password"
                />
                <div
                  className="openPassword"
                  onClick={() => setShowPasword(!showPassord)}
                >
                  <SVGimage src={!showPassord ? glazIcon : glazIconOpen} />
                </div>
              </div>

              <div className="modal__buttonLogin">
                <CorrectButton
                  onClick={handlerSendUser}
                  className={`button__color animate__animated ${buttonLoginStyle}`}
                >
                  SIGN UP
                </CorrectButton>
                <p>
                  Already Have An Account? <a href="#">Log In</a>
                </p>
              </div>
            </div>
          </div>
          <div className="modal__footer">
            <p>Privacy Policy</p>
            <p>Copyright 2022</p>
          </div>
        </div>
        <div className="loginModal__right">
          <SVGimage src={pattern} />

          <div className="loginModal__img">
            <img src={hero_img} alt="" />
          </div>
          <div className="loginModal__text">
            <h2>Find Foods With Love </h2>
            <p>
              Eatly Is The Food Delivery Dashboard And Having More Than 2K+
              Dishes Including Asian, Chinese, Italians And Many More. Our
              Dashboard Helps You To Manage Orders And Money.
            </p>
            <div className="modal__footer-element"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
