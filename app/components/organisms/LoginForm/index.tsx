"use client"
import { RiLockPasswordFill } from "react-icons/ri"
import { HiOutlineAtSymbol } from "react-icons/hi"
import { RawLocalizedText, LocalizedText } from "@/app/locales"
import {
    Form,
    Input,
    Button,
    Alert,
    Row,
    Col,
    Title,
    Text,
  } from "@/app/components"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/app/actions/authentication"
import { REQUEST } from "@/app/utils/constants/network"

const LoginForm = () => {

  const [loading, setLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [form] = Form.useForm()

  const router = useRouter()

  const wrongDetailsError = RawLocalizedText("login.error.wrongDetails")
  const unknownError = RawLocalizedText("login.error.unknown")
  const emailRequiredMessage = RawLocalizedText("login.email.required.message")
  const emailValidationMessage = RawLocalizedText("login.email.validation.message")

  const showAlertMessage = (message: string) => {
    setAlertMessage(message)
    setShowAlert(true)
  }

  const handleSubmit = async (values: any) => {

    setLoading(true)
    setShowAlert(false)

    const email = values.email
    const password = values.password

    
    const data = await login({ email, password })

    switch (data) {
      case REQUEST.SUCCESSFUL:
        router.push("/overview")
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


  return (
      <Form form={form}
          onFinish={handleSubmit}
          className="w-80"
        >
        <Row gutter={[24, 8]} justify="center">
          <Col span={24} flex={"inherit"}>
            <Title level={3}>
              <LocalizedText id="login.title"/>
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
                placeholder={RawLocalizedText("login.email.placeholder")}
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
                placeholder={RawLocalizedText("login.password.placeholder")}
                visibilityToggle={true}                
                prefix={
                  <RiLockPasswordFill className="h-6 w-6 fill-blue-zodiac" />
                }/>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button type="primary" onClick={form.submit} loading={loading}>
                <LocalizedText id="login.button.title" />
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
  )
}

export default LoginForm