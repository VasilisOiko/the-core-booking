"use client"
import { changePassword } from "@/app/actions/athlete"
import { Button, Divider, Form, Input, notification, Title } from "@/app/components"
import { CHANGE_PASSWORD_REQUEST } from "@/app/utils/constants/network"
import { useTranslations } from "next-intl"
import { useState } from "react"

type NotificationType = "success" | "warning" | "error"

// TODO: after change clear form and close drawer
// TODO: rule the new password should contain a number and a symbol

function changePasswordForm() {

    const [formInstance] = Form.useForm()

    const t = useTranslations("userProfileMenu.changePassword")

    const [processingRequest, setProcessingRequest] = useState(false)

    const [api, contextHolder] = notification.useNotification()

    const formRules = {
        oldPassword: [
            {
                required: true,
                message: t("form.validationMessages.oldPassword.required"),
            }
        ],
        newPassword: [
            {
                required: true,
                message: t("form.validationMessages.newPassword.required"),
            }
        ],
        confirmPassword: [
            {
                required: true,
                message: t("form.validationMessages.confirmPassword.required"),
            },
            ({ getFieldValue }: any) => ({
                validator(_: any, value: any) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error(t("form.validationMessages.confirmPassword.match")))
                },
              })
        ],
    }

    const showNotification = (statusMessage: boolean | string) => {
        let type: NotificationType = "error"
        let message: string
        let description: string

        switch (statusMessage) {
            case CHANGE_PASSWORD_REQUEST.SUCCESSFUL:
                type = "success"
                message = t("form.notification.success.message")
                description = t("form.notification.success.description")
                break
                
            case CHANGE_PASSWORD_REQUEST.INVALID_OLD_PASSWORD:
                type = "warning"
                message = t("form.notification.warning.invalidOldPassword.message")
                description = t("form.notification.warning.invalidOldPassword.description")
                break
                
            case CHANGE_PASSWORD_REQUEST.INVALID_NEW_PASSWORD:
                type = "warning"
                message = t("form.notification.warning.invalidNewPassword.message")
                description = t("form.notification.warning.invalidNewPassword.description")
                break
                
            case CHANGE_PASSWORD_REQUEST.UNKNOWN_ERROR:
                type = "error"
                message = t("form.notification.error.message")
                description = t("form.notification.error.description")
                break
                    
            default:
                message = t("form.notification.error.message")
                description = t("form.notification.error.description")
                break
        }
        api[type]({
            message,
            description,
            showProgress: true,
            duration: 3
        })
    }

    const makeRequest = async (values: any) => {

        setProcessingRequest(true)

        const statusMessage = await changePassword(values.oldPassword, values.newPassword)

        statusMessage === CHANGE_PASSWORD_REQUEST.SUCCESSFUL && formInstance.resetFields()

        setProcessingRequest(false)
        showNotification(statusMessage)
      }

  return (
    <>
        {contextHolder}
        <Title level={3}>{t("title")}</Title>
        <Form
            form={formInstance}
            layout="vertical"
            size="large"
            validateTrigger="onChange"
            onFinish={makeRequest}
        >
            <Form.Item
                name="oldPassword"
                label={t("form.oldPassword.label")}
                rules={formRules.oldPassword}
            >
                <Input.Password />
            </Form.Item>
            <Divider/>
            <Form.Item
                name="newPassword"
                label={t("form.newPassword.label")}
                rules={formRules.newPassword}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="confirmPassword"
                label={t("form.confirmNewPassword.label")}
                rules={formRules.confirmPassword}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item 
                name="submit"
            >
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={processingRequest}
                >
                    {t("form.button.label")}
                </Button>
            </Form.Item>
        </Form>
    </>
  )
}

export default changePasswordForm