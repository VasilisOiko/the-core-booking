"use server"
import { cookies } from "next/headers"
import { REQUEST } from "../utils/constants/network"
import { fetchToken } from "../services/athlete"
import { redirect } from "next/navigation"

type loginCredentials = {
  email: string;
  password: string;
}

const isAuthenticated = () => {
  return cookies().has("token")
}
const getToken = () => {
  return cookies().get("token")?.value
}

const login = async ({email, password}: loginCredentials) => {
  try {
    const response = await fetchToken({username: email, password})

    if (response.status !== 200) {
      return REQUEST.FAILED.WRONG_USER_DATA
    }

    cookies().set("token", response.data.token, { secure: true, sameSite: "strict", maxAge: 60 * 60 * 24 * 30 })
    
    return REQUEST.SUCCESSFUL
  }
  catch (error: any) {
    return REQUEST.FAILED.UNKNOWN_ERROR
  }
  
}

const logout = () => {
  cookies().delete("token")
  redirect("/login")
}


export { isAuthenticated, getToken, login, logout}