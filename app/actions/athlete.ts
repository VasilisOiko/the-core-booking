"use server"

import { fetchAthlete, requestChangePassword } from "../services/athlete"
import { AthletePastBookingsProps, AthleteProps } from "../types/athlete"

const getAthlete = async (): Promise<AthleteProps> => {

    try {
        const response = await fetchAthlete()

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

const getAthletePastBookings = async (): Promise<AthletePastBookingsProps> => {

    try {
        const response = await fetchAthlete()

        return response.athleteBookings
    }
    catch (error) {
        return Promise.reject(error)
    }
}

const changePassword = async (oldPassword: string, newPassword: string): Promise<boolean | string> => {

    const response = await requestChangePassword(oldPassword, newPassword)

    return response.data
}

export { getAthlete, getAthletePastBookings, changePassword }
