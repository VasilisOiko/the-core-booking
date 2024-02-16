import React from "react";
import { RiAlertFill } from "react-icons/ri";

type alertProps = {
  visible?: boolean;
  type?: "info" | "warning" | "error";
  title?: string;
  message?: string;
};

function Alert({ visible, type, title, message }: alertProps) {
  /* styles */
  const containerStyle = "flex items-center m-4 p-2 leading-none lg:inline-flex lg:rounded-full text-indigo-100"
  const infoStyle = "bg-neptune";
  const warningStyle = "bg-amber-700";
  const visibilityStyle = "hidden";

  const styles = [
    containerStyle,
    type === "info" ? infoStyle : "",
    type === "warning" ? warningStyle : "",
  ].join(" ");

  /* functionality */

  return (
      <div className={visible ? "" : visibilityStyle}>
        <div
        className={`${styles}`}
        role="alert"
        >
          <RiAlertFill 
            className="h-6 w-6 fill-current opacity-75"
          />
          <span className="mr-2 flex-auto text-left font-semibold">
            {message}
          </span>
        </div>
      </div>
  );
}

export default Alert;
