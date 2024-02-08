import React, { ReactNode } from "react";

export type useProps = {
  className?: any;
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  variant?: "primary";
  onClick?: () => void;
};

function Button({
  className,
  children,
  type,
  disabled,
  variant,
  onClick,
}: useProps) {
  const baseStyle = "px-6 py-2 rounded-full focus:outline-none";
  const primaryContainerStyle = "h-0.5 mt-2";
  const primaryStyle = "bg-azure text-black";
  const hoverStyle = "transition hover:scale-105";
  const activeStyle = "active:scale-90";
  const disabledStyle = "cursor-not-allowed opacity-50";

  const activeStyles = [hoverStyle, activeStyle].join(" ",);

  const buttonStyles = [
    baseStyle,
    variant === "primary" ? primaryStyle : "",
    disabled ? disabledStyle : activeStyles,
  ].join(" ");

  return (
    <div className={primaryContainerStyle}>
      <button
        className={`${buttonStyles} ${className}`}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
