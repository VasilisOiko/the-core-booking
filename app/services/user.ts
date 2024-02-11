import axios from "axios";

type loginProps = {
    username: string;
    password: string;
}

const baseURL = "https://thecorecf.com//api/";
const loginURL = "auth/token/athlete/";

const api = axios.create({
    baseURL: "https://thecorecf.com//api",
    timeout: 10000,
    headers: {
        Accept: "application/json, text/plain",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        Connection: "keep-alive",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        TE: "trailers",
    }
})

const services = {
    login: ({ username, password }: loginProps) => {
        console.log("login with: ", username, password);
        api.post(`${loginURL}${username}`, {
            username: username,
            password: password,
        })
        .then((response) => {
            console.log(response)
            return response;
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export default services;