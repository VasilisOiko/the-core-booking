"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Form } from "antd"
import REQUEST from "../utils/constants/network"
import { RawLocalizedText } from "../locales/index"
import { login } from "../actions/authentication"

const useLoginHandler = () => {
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

  return {
    form,
    loading,
    showAlert,
    alertMessage,
    emailRequiredMessage,
    emailValidationMessage,
    handleSubmit,
  }
}

export default useLoginHandler
