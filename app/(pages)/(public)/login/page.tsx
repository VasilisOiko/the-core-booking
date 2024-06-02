"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { RiLockPasswordFill } from "react-icons/ri"
import { HiOutlineAtSymbol } from "react-icons/hi"
import { RawLocalizedText, LocalizedText } from "../../../locales/index"

import {
  Form,
  Input,
  Button,
  Alert,
  Row,
  Col,
  Flex,
  Title,
  Text,
} from "../../../components"

import { authenticate } from "../../../lib/actions"
import REQUEST from "../../../utils/constants/network"


function page() {

  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")

  const [form] = Form.useForm()

  const wrongDetailsError = RawLocalizedText("login.error.wrongDetails")
  const unknownError = RawLocalizedText("login.error.unknown")
  const emailRequiredMessage = RawLocalizedText("login.email.required.message")
  const emailValidationMessage = RawLocalizedText("login.email.email.validation.message")

  const router = useRouter()

  const showAlertMessage = (message: string) => {
    setAlertMessage(message)
    setShowAlert(true)
  }
  
  const handleSubmit = async (values: any) => {

    setLoading(true)
    setShowAlert(false)

    const email = values.email
    const password = values.password

    const data = await authenticate({ email, password })

    switch (data) {

      case REQUEST.SUCCESSFUL:
        router.push('/dashboard')
        break

      case REQUEST.FAILED.WRONG_USER_DATA:
        showAlertMessage(wrongDetailsError)
        break

      case REQUEST.FAILED.UNKNOWN_ERROR:
        showAlertMessage(unknownError)
        break

      default:
        showAlertMessage(unknownError)
        break
    }
    setLoading(false)
  }

  console.log(showAlert)

  return (
    <Flex
      className="h-screen"
      justify="center"
      align="center"
    >
      <Form form={form}
          onFinish={handleSubmit}
          className="w-80"
        >
        <Row gutter={[24, 8]} justify="center">
          <Col span={24} flex={"inherit"}>
            <Title level={3}>
              <LocalizedText id="loginTitle"/>
            </Title>
          </Col>

          <Col span={24}>
            {showAlert && <Alert type="warning" message={<Text>{alertMessage}</Text>} showIcon/>}
          </Col>
          
          <Col span={24}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: emailRequiredMessage },
                { type: "email", message:emailValidationMessage}
              ]}>
              <Input
                type="email"
                placeholder={RawLocalizedText("emailPlaceholder")}
                id="email"
                required={true}
                prefix={
                  <HiOutlineAtSymbol className={"h-6 w-6 stroke-blue-zodiac stroke-2"} />
                }
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="password">
              <Input.Password
                id="password"
                type="password"
                placeholder={RawLocalizedText("passwordPlaceholder")}
                visibilityToggle={true}                
                prefix={
                  <RiLockPasswordFill className="h-6 w-6 fill-blue-zodiac" />
                }/>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button type="primary" onClick={form.submit} loading={loading}>
                <LocalizedText id="loginAction" />
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Flex>
  )
}

export default page
