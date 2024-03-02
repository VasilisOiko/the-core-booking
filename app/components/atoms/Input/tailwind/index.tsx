import React, { ReactNode } from "react";

export type useProps = {
  className?: any;
  type?: string;
  placeholder?: string;
  id?: any;
  name?: any;
  required?: boolean;
  icon?: ReactNode;
};

function Input({
  className,
  type,
  placeholder,
  id,
  name,
  required,
  icon,
}: useProps) {
  const containerBaseStyle =
    "flex items-center rounded-xl border-4 border-gray-400 min-w-full bg-white";
  const containerFocusStyle = "focus-within:border-gable-green";
  const iconStyle = "pl-2 pr-1";
  const inputBaseStyle = "outline-none border-none py-2 mr-3 basis-full peer";
  const inputInvalidStyle = "invalid:text-shiraz";

  const containerStyles = [containerBaseStyle, containerFocusStyle].join(" ");
  const iconStyles = [icon ? iconStyle : ""].join(" ");
  const inputStyles = [inputBaseStyle, inputInvalidStyle].join(" ");

  return (
    <div className={`${containerStyles} ${className}`}>
      <div className={iconStyles}>{icon}</div>
      <input
        className={`${inputStyles}`}
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        required={required}
      />
    </div>
  );
}

export default Input;
