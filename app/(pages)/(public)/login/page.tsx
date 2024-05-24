"use client";

import React, { useState } from "react";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiOutlineAtSymbol } from "react-icons/hi";
import { RawLocalizedText, LocalizedText } from "../../../locales/index"

import {
  Form,
  Input,
  Button,
  Alert,
} from "../../../components"

import useStore from "../../../store/user";

import { authenticate } from "../../../lib/actions";
import REQUEST from "../../../utils/constants/network";
import useAuth from "@/app/hooks/useAuth";

function page() {

  /* state */
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [form] = Form.useForm()

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
  
  const handleSubmit = async (values: any) => {

    setLoading(true);

    console.log("values: ", values)

    const email = values.email.value;
    const password = values.password.value;

    const data = await authenticate({ email, password });

    switch (data) {
      case REQUEST.SUCCESSFUL:
        setAlertMessage("success");
        break;
      case REQUEST.FAILED.WRONG_USER_DATA:
        setAlertMessage(wrongDetailsError);
        break;

      case REQUEST.FAILED.UNKNOWN_ERROR:
        setAlertMessage(unknownError);
        break;

      default:
        //TODO: set locale
        setAlertMessage("unknown");
        break;
    }
    showAlertMessage();
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-blurry-gradient">
      <Alert visible={showAlert} type="warning" message={alertMessage} />
      <LocalizedText
        className="text-lg font-semibold text-gray-100"
        id="loginTitle"
      />
      <Form form={form}
        onFinish={handleSubmit}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Email must be \"user@example.com\" format"}
          ]}
        >
          <Input
            type="email"
            placeholder={RawLocalizedText("emailPlaceholder")}
            id="email"
            required={true}
            prefix={
              <HiOutlineAtSymbol
                className={`${symbolStyle} stroke-blue-zodiac stroke-2`}
              />
            }
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            type="password"
            placeholder={RawLocalizedText("passwordPlaceholder")}
            id="password"
            
            required={true}
            prefix={
              <RiLockPasswordFill
                className={`${symbolStyle} fill-blue-zodiac`}
              />
            }
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={form.submit}>
            <LocalizedText id="loginAction" />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default page
