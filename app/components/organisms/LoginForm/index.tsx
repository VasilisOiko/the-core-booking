"use client"
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
    Title,
    Text,
  } from "../../../components"

import useLoginHandler from "@/app/lib/useLoginHandler"

const LoginForm = () => {

    const {
        form,
        loading,
        showAlert,
        alertMessage,
        emailRequiredMessage,
        emailValidationMessage,
        handleSubmit,
      } = useLoginHandler();


  return (
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
  )
}

export default LoginForm