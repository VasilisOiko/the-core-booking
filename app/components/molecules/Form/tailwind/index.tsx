import React, { ReactNode } from "react";
import { HiAtSymbol } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import Input from "../../../atoms/Input/tailwind";
import Button from "../../../atoms/Button/tailwind";

export type useFormProps = {
  className?: any;
  children?: ReactNode;
  onSubmit?: (event:any) => any;
};

export type useItemProps = {
  className?: any;
  As?: ReactNode;
  children?: ReactNode;
};

const inputContainerStyle = "my-2";
const symbolStyle = "h-6 w-6 fill-blue-zodiac";

function Form({ className, children, onSubmit }: useFormProps) {

  /* functionality */


  return (
    <form className={`flex w-72 flex-col items-center ${className}`}
    onSubmit={onSubmit? (event) => onSubmit(event) : () => {}}
    >
      {children}
    </form>
  );
}

function Item({className, children}: useItemProps) {

  const containerStyle = "my-2";

  return (
    <div className={`${containerStyle} ${className}`}>
      {children}
    </div>
  );
}

Form.Item = Item;

export default Form;
