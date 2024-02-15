import React from "react";
import { RiAlertFill } from "react-icons/ri";

type alertProps = {
  visible?: boolean;
  type?: "info" | "warning" | "error";
  title?: string;
  message?: string;
};

function Alert({ visible, type, title, message }: alertProps) {
  const containerStyles = "flex items-center m-4 p-2 leading-none lg:inline-flex lg:rounded-full text-indigo-100"
  const infoStyle = "bg-neptune";
  const warningStyle = "bg-amber-700";
  const visibilityStyle = "hidden";

  const styles = [
    containerStyles,
    visible ? "" : visibilityStyle,
    type === "info" ? infoStyle : "",
    type === "warning" ? warningStyle : "",
  ].join(" ");
  return (
      <div
        className={`${styles} containerStyles`}
        role="alert"
      >
        <RiAlertFill 
          className="h-6 w-6 fill-current opacity-75"
        />
        <span className="mr-2 flex-auto text-left font-semibold">
          {message}
        </span>
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
      </div>
  );
}

export default Alert;
