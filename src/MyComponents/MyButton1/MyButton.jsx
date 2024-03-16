import React from "react";
// onClick={setLoginModalHidden}
// loginModalHidden={loginModalHidden}
const MyButton = ({
  children,
  className,
  setLoginModalHidden = null,
  loginModalHidden = null,
  handlerSendUser,
}) => {
  return (
    <button
      className={className}
      onClick={
        setLoginModalHidden
          ? () => setLoginModalHidden(!loginModalHidden)
          : undefined
      }
    >
      {children}
    </button>
  );
};

export default MyButton;
