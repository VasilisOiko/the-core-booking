import React from "react";
import Form from "../components/molecules/Form";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineAtSymbol } from "react-icons/hi";

function page() {
  const symbolStyle = "h-6 w-6";

  return (
    <div className="flex h-screen items-center justify-center bg-blurry-gradient">
      <Form>
        <Form.Item>
          <Input
          type="email"
          placeholder="Email Address"
          id="email"
          name="email"
          required={true}
          icon={<HiOutlineAtSymbol className={`${symbolStyle} stroke-2 stroke-blue-zodiac`} />}
          />
        </Form.Item>
        <Form.Item>
          <Input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          required={true}
          icon={<RiLockPasswordFill className={`${symbolStyle} fill-blue-zodiac`} />}
          />
        </Form.Item>
        <Form.Item>
          <Button variant="primary">Login</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default page;
