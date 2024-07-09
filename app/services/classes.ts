import { rejects } from "assert"
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
            throw new Error('Failed to fetch classes')
          }

        const data = await response.json()

        return { status: response.status, data}

    } catch (error: any) {
        console.error(error)
        throw error
    }
}

const bookWorkoutClass = async ({ classId }: { classId: string }) => {

    const token = await getToken()

    try {
        // const response = await fetch(`${bookWorkoutURL}/${classId}`, {
        //             // credentials: "include",
        //             method: "POST",
        //             headers: {
        //                 "Authorization": `Bearer ${token}`,
        //                 "Content-Type": "application/json",
        //                 // "Sec-Fetch-Dest": "empty",
        //                 // "Sec-Fetch-Mode": "cors",
        //                 // "Sec-Fetch-Site": "same-origin",
        //                 // "Priority": "u=1"
        //             },
        //             // "mode": "cors"
        //         });

        const response = await new Promise<any>((accept, rejects) => {
            setTimeout(() => (accept({ ok: true, status: 200, data: {} })), 1000)
            // accept({ ok: true, status: 200, data: {} })
        })

        if (!response.ok) {
            throw new Error('Failed to book class')
          }

        // const data = await response.json()
        const data = await response.data

        return { status: response.status, data}

    } catch (error: any) {
        console.error(error)
        throw error
    }
}

export { fetchClasses, bookWorkoutClass }