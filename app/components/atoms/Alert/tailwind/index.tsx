import React from "react";
import {RiErrorWarningLine, RiAlertFill, RiCloseCircleLine } from "react-icons/ri";

type alertProps = {
  visible?: boolean;
  type: "info" | "warning" | "error";
  message?: string;
};

function Alert({ visible, type, message }: alertProps) {
  
  /* styles */
  const containerStyle = "absolute w-fit top-10 text-indigo-100";
  const baseStyle = "flex rounded-full border-2 border-amber-900 p-2";
  const infoStyle = "bg-neptune";
  const warningStyle = "bg-gradient-to-b from-yellow-900 to-orange-900";
  const visibilityStyle = "hidden";
  const appearListStyle = "transition ease-in duration-400 translate-y-0 opacity-100";
  const disappearListStyle = "transition ease-out duration-400 -translate-y-3.5 opacity-0 pointer-events-none";
  const iconStyle = "h-6 w-6 fill-current opacity-75 text-amber-600"
  
  const containerStyles = [
    containerStyle,
    visible ? appearListStyle : disappearListStyle
  ].join(" ")
  
  const messageStyles = [
    baseStyle,
    type === "info" ? infoStyle : "",
    type === "warning" ? warningStyle : "",
  ].join(" ");

  const icon = (() => {
    switch (type) {
      case "info":
        return <RiErrorWarningLine className={iconStyle} />

      case "warning":
        return <RiAlertFill className={iconStyle} />

      case "error":
        return <RiCloseCircleLine className={iconStyle} />
    }
  })();

  /* functionality */

  return (
      <div className={containerStyles}>
        <div
        className={`${messageStyles}`}
        role="alert"
        >
          {icon}
          <span className="mr-2 flex-auto text-left font-semibold">
            {message}
          </span>
        </div>
      </div>
  );
}

export default Alert;
