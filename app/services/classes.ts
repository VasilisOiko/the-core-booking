import { getToken } from "../actions/authentication"
import { classesURL } from "./apiUrls"


const fetchClasses = async () => {

    const token = await getToken()

    try {
        const response = await fetch(classesURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch classes')
          }

        const data = await response.json()

        return { status: response.status, data}

    } catch (error: any) {
        console.error(error)
        throw error
    }
}

export { fetchClasses }