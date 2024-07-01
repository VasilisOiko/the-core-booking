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

import useLoginForm from "@/app/hooks/useLoginForm"

const LoginForm = () => {

    const {
        form,
        loading,
        showAlert,
        alertMessage,
        emailRequiredMessage,
        emailValidationMessage,
        handleSubmit,
      } = useLoginForm()


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