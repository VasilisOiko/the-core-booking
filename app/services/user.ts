import axios from "axios";
import REQUEST from "../utils/constants/network";
import { stringifyError } from "next/dist/shared/lib/utils";

type Login = Promise<string>

type loginProps = {
    username: string;
    password: string;
}

const loginURL = "auth/token/athlete/";

const api = axios.create({
    baseURL: "https://thecorecf.com//api",
    timeout: 10000,
    headers: {
        Accept: "application/json, text/plain",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/json",
    }
})


const Login = ({ username, password }: loginProps) => {
    let returnValue = "";

    return api.post(`${loginURL}${username}`, {
        username: username,
        password: password,
    })
    .then((response) => {
        return response.data.token;
    })
    .catch((error) => {
        if(JSON.stringify(error.response.data) === REQUEST.FAILED.WRONG_USER_DATA) {
            return REQUEST.FAILED.WRONG_USER_DATA;
        }
        else {
            return  REQUEST.FAILED.UNKNOWN_ERROR;
        }
    })
}

export {Login}