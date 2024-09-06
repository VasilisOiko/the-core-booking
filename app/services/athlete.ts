import axios from "axios"
import { getToken } from "../actions/authentication"
import { REVALIDATE_TAG } from "../utils/constants/network"
import { authURL, changePasswordURL, clientURL } from "./apiUrls"

type loginProps = {
    username: string
    password: string
}

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

const fetchAthlete = async () => {

    const token = await getToken()

    try {
        const response = await fetch(clientURL, {
          method: "GET",
          cache: "force-cache",
          next: { tags: [REVALIDATE_TAG.ATHLETE] },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
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

const requestChangePassword = async (oldPassword: string, newPassword: string) => {

    const token = await getToken()

    try {
      const response = await fetch(changePasswordURL, {
        method: "PUT",
        "headers": {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          oldPassword,
          newPassword
        }),
      })

      const data = await response.json()

      return { status: response.status, data}
      
    } catch (error: any) {

      console.error(`Error fetching client: ${error.message}`)

      return { status: 417, data: {}}
    }
}

export { fetchToken, fetchAthlete, requestChangePassword }