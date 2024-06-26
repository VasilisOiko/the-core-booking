import { fetchClient } from "../services/user"


type athlete = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string | null,
    registered: string,
    waiver: boolean,
    medical: boolean,
    image: string | null,
    memberships: {
        ends: string,
        starts: string,
        description: string,
        isVisit: boolean,
        visits: number
    }[]
}

export type AthletePastBookings = {
    id: string,
    athleteId: string,
    gymId: null | string,
    wodClassId: string,
    dailyClassesId: number,
    title: string,
    time: string,
    isSubstituted: boolean,
    capacity: number,
    booked: number,
    substitutions: number,
    date: string,
    bookedTime: string | null,
    cancellationTime: string | null,
    athleteName: string | null
}[]


const getAthlete = async (): Promise<athlete> => {

    try {
        const response = await fetchClient()

        return {
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            phone: response.phone,
            address: response.address,
            registered: response.registered,
            waiver: response.waiver,
            medical: response.medical,
            image: response.image,
            memberships: response.memberships
        }
    }
    catch (error) {
        return Promise.reject(error)
    }
}

const getAthletePastBookings = async (): Promise<AthletePastBookings> => {

    try {
        const response = await fetchClient()

        return response.athleteBookings
    }
    catch (error) {
        return Promise.reject(error)
    }
}

export { getAthlete, getAthletePastBookings }
