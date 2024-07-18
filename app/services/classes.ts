import { getToken } from "../actions/authentication"
import { REVALIDATE_TAG } from "../utils/constants/network"
import { bookWorkoutURL, classesURL } from "./apiUrls"


const fetchClasses = async () => {

    const token = await getToken()

    try {
        const response = await fetch(classesURL, {
            method: "GET",
            cache: "force-cache",
            next: { tags: [REVALIDATE_TAG.CLASSES] },
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })

        if (!response.ok) {
            throw new Error("Failed to fetch classes")
          }

        const data = await response.json()

        return { status: response.status, data}

    } catch (error: any) {
        console.error(error)
        throw error
    }
}

const bookWorkoutClass = async ({ classId, classHour }: { classId: string, classHour: number }) => {

    const token = await getToken()

    try {
        const response = await fetch(`${bookWorkoutURL}/${classId}/${classHour}`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                        origin: "https://thecorecf.com",
                    },

                })

        const data = await response.json()

        return { status: response.status, data}

    } catch (error: any) {
        console.error(error)
        return { status: 417, data: {} }
    }
}

export { fetchClasses, bookWorkoutClass }