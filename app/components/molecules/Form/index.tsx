import React from "react";
import { HiAtSymbol } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Input } from "../../atoms/Input";
import Button from "../../atoms/Button";

export type useProps = {
  className?: any;
};

const inputContainerStyle = "my-2";
const symbolStyle = "h-6 w-6 fill-blue-zodiac";

function Form({ className }: useProps) {
  return (
    <form className={`flex w-72 flex-col items-center ${className}`}>
      <Input
        className={`${inputContainerStyle}`}
        type="email"
        placeholder="Email Address"
        id="email"
        name="email"
        required={true}
        icon={<HiAtSymbol className={symbolStyle} />}
      />
      <Input
        className={`${inputContainerStyle}`}
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        required={true}
        icon={<RiLockPasswordFill className={symbolStyle} />}
      />
      <Button variant="primary">Login</Button>
    </form>
  );
}

export default Form;
