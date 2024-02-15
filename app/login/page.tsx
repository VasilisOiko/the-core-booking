"use client";

import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineAtSymbol } from "react-icons/hi";

import LocalizedText, {
  RawLocalizedText,
} from "../components/atoms/LocalizedText";

import useStore from "../store/user";

import { Login } from "../services/user";
import Form from "../components/molecules/Form";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import REQUEST from "../utils/constants/network";
import Alert from "../components/atoms/Alert";

function page() {
  const updateToken = useStore((state) => state.updateToken);
  const token = useStore((state) => state.token);

  /* state */
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const wrongDetailsError = RawLocalizedText("login.error.wrongDetails")
  const unknownError = RawLocalizedText("login.error.unknown");

  /* styles */
  const symbolStyle = "h-6 w-6";

  /* functionality */
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    console.log("form content: ", event);
    console.log("email: ", event.target.email.value);
    console.log("password: ", event.target.password.value);

    const email = event.target.email.value;
    const password = event.target.password.value;

    const data = await Login({ username: email, password });

    switch (data) {
      case REQUEST.FAILED.WRONG_USER_DATA:
        setAlertMessage(wrongDetailsError);
        break;

      case REQUEST.FAILED.UNKNOWN_ERROR:
        setAlertMessage(unknownError);
        break;

      default:
        updateToken(data);
        setAlertMessage("success");
        break;
    }
    setShowAlert(true);

  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blurry-gradient">
      <Alert visible={showAlert} type="warning" title="Error" message={alertMessage} />
      <LocalizedText
        className="text-lg font-semibold text-gray-100"
        id="loginTitle"
      />
      <Form className="disabled" onSubmit={handleSubmit}>
        <Form.Item>
          <Input
            type="email"
            placeholder={RawLocalizedText("emailPlaceholder")}
            id="email"
            name="email"
            required={true}
            icon={
              <HiOutlineAtSymbol
                className={`${symbolStyle} stroke-blue-zodiac stroke-2`}
              />
            }
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="password"
            placeholder={RawLocalizedText("passwordPlaceholder")}
            id="password"
            name="password"
            required={true}
            icon={
              <RiLockPasswordFill
                className={`${symbolStyle} fill-blue-zodiac`}
              />
            }
          />
        </Form.Item>
        <Form.Item>
          <Button variant="primary" type="submit">
            <LocalizedText id="loginAction" />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default page;
