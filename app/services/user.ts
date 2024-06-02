import axios from "axios";
import REQUEST from "../utils/constants/network";

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


const fetchToken = ({ username, password }: loginProps) => {

    console.log("fetchToken", username, password)

    return api.post(`${loginURL}${username}`, {
        username: username,
        password: password,
    })
}

export { fetchToken }