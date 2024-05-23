"use client";

import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineAtSymbol } from "react-icons/hi";
import { RawLocalizedText, LocalizedText } from "../../locales/index"

import {
  Form,
  Input,
  Button,
  Alert,
} from "../../components"

import useStore from "../../store/user";

import { authenticate } from "../../lib/actions";
import REQUEST from "../../utils/constants/network";

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
  const showAlertMessage = () => {
    setShowAlert(true);

    const timeout = setTimeout(() => {
      setShowAlert(false)
      clearTimeout(timeout);
    }, 5000);
  }
  
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const email = event.target.email.value;
    const password = event.target.password.value;

    const data = await authenticate({ email, password });

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
    showAlertMessage();
  }
  console.log("token: ", token)
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blurry-gradient">
      <Alert visible={showAlert} type="warning" message={alertMessage} />
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
            prefix={
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
            prefix={
              <RiLockPasswordFill
                className={`${symbolStyle} fill-blue-zodiac`}
              />
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary">
            <LocalizedText id="loginAction" />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default page;
