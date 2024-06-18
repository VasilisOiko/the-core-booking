import axios from "axios"
import { getToken } from "../actions/authentication"

type loginProps = {
    username: string
    password: string
}
const apiURL = "https://thecorecf.com/api/"
const authURL = `${apiURL}auth/token/athlete/`
const clientURL = `${apiURL}client/ddb67c26-e64c-4cc9-9468-0f1f75eb3e67`
// const authURL = "auth/token/athlete/"
// const clientURL = "client/ddb67c26-e64c-4cc9-9468-0f1f75eb3e67"

const api = axios.create({
    baseURL: "https://thecorecf.com//api",
    timeout: 10000,
    headers: {
        Accept: "application/json, text/plain",
        "Accept-Language": "en-US,enq=0.5",
        "Content-Type": "application/json",
    }
})


// const fetchToken = ({ username, password }: loginProps) => {

//     console.log("fetchToken", username, password)

//     return api.post(`${authURL}${username}`, {
//         username: username,
//         password: password,
//     })
// }


// const fetchClient = () => {

//     return api.get(clientURL, {
//         headers: {
//             Authorization: `Bearer ${getToken()}`
//         }
//     })
// }
const fetchToken = async ({ username, password }: loginProps) => {

    try {
        const response = await fetch(`${authURL}${username}`, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
            })
        })
        const data = await response.json()

        return { status: response.status, data}

    } catch (error: any) {
        console.error(error)
        throw error
    }
}

const fetchClient = async () => {

    try {
        const response = await fetch(clientURL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        return data

      } catch (error: any) {
        console.error(`Error fetching client: ${error.message}`)
        throw error
      }
}

export { fetchToken, fetchClient }