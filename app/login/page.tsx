"use client"

import React from "react";
import Form from "../components/molecules/Form";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineAtSymbol } from "react-icons/hi";
import LocalizedText, { getRawLocalizedText } from "../components/atoms/LocalizedText";
import services from "../services/user";

function page() {

 
  /* styles */
  const symbolStyle = "h-6 w-6";

  /* functionality */
  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log("form content: ", event);
    console.log("email: ", event.target.email.value);
    console.log("password: ", event.target.password.value);

    const email = event.target.email.value;
    const password = event.target.password.value;
    services.login({username: email, password})
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-blurry-gradient">
      <LocalizedText className="text-lg font-semibold" id="loginTitle"/>
      <Form onSubmit={handleSubmit}>
        <Form.Item>
          <Input
          type="email"
          placeholder={getRawLocalizedText("emailPlaceholder")}
          id="email"
          name="email"
          required={true}
          icon={<HiOutlineAtSymbol className={`${symbolStyle} stroke-2 stroke-blue-zodiac`} />}
          />
        </Form.Item>
        <Form.Item>
          <Input
          type="password"
          placeholder={getRawLocalizedText("passwordPlaceholder")}
          id="password"
          name="password"
          required={true}
          icon={<RiLockPasswordFill className={`${symbolStyle} fill-blue-zodiac`} />}
          />
        </Form.Item>
        <Form.Item>
          <Button variant="primary" type="submit"><LocalizedText id="loginAction"/></Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default page;
