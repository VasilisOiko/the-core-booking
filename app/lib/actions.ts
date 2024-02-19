'use server'
 
import { login } from '../services/user'
import REQUEST from '../utils/constants/network';

type loginCredentials = {
    email: string;
    password: string;
}
 
export async function authenticate({email, password}: loginCredentials) {
  try {
    const response = await login({username: email, password})
    
    return response.data.token;
  } catch (error) {
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