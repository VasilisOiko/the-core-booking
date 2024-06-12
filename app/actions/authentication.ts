"use server"
import { cookies } from "next/headers"
import REQUEST from "../utils/constants/network"
import { fetchToken } from "../services/user"

type loginCredentials = {
  email: string;
  password: string;
}


const isAuthenticated = () => {
  return cookies().has("token")
}

const login = async ({email, password}: loginCredentials) => {
  try {
    const response = await fetchToken({username: email, password})
    
    cookies().set("token", response.data.token, { secure: true, sameSite: "strict" })
    
    return REQUEST.SUCCESSFUL

  }
  catch (error: any) {

    if (error) {
        if(JSON.stringify(error.response.data) === REQUEST.FAILED.WRONG_USER_DATA) {
            return REQUEST.FAILED.WRONG_USER_DATA
        }
        else {
            return REQUEST.FAILED.UNKNOWN_ERROR
        }
    }
    throw error
  }
  
}

const logout = () => {
  cookies().delete("token")
}


export { isAuthenticated, login, logout}