import React from "react";
import style from "./button.module.css";
import loading from "../../assets/images/loading.svg";

function Button({
  handleClick,
  type,
  className,
  isLoading = false,
  children,
  ...props
}) {
  return (
    <button
      onClick={!isLoading ? handleClick : null}
      className={`${style.button} ${style[type || "normal"]} ${
        className || ""
      } `}
      {...props}
    >
      {!isLoading && children}
      {isLoading && (
        <p className={style.button_loading}>
          <img
            className={style.button_loading_img}
            src={loading}
            alt="Loading"
          />
        </p>
      )}
    </button>
  );
}

export default Button;
