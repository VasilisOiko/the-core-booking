"use server"
 
import useAuth from "../hooks/useAuth";
import { fetchToken } from "../services/user"
import REQUEST from "../utils/constants/network";

type loginCredentials = {
    email: string;
    password: string;
}
 
export async function authenticate({email, password}: loginCredentials) {
  try {
    const response = await fetchToken({username: email, password})

    console.log("authenticate: ", email, password)

    console.log("response: ", response)
    const { login } = useAuth()
    
    login(response.data.token)
    
    return REQUEST.SUCCESSFUL;
  } catch (error: any) {
    console.log("response: ", error)
    if (error) {
        if(JSON.stringify(error.response.data) === REQUEST.FAILED.WRONG_USER_DATA) {
            return REQUEST.FAILED.WRONG_USER_DATA;
        }
        else {
            return REQUEST.FAILED.UNKNOWN_ERROR;
        }
    }
    throw error
  }
}