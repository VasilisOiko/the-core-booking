"use server"
import { bookWorkoutClass, fetchClasses } from "../services/classes"
import { BookingProps } from "../types/bookings"
import { revalidateTag } from "next/cache"
import { REVALIDATE_TAG, BOOKING_REQUEST } from "../utils/constants/network"

const getAvailableBookings = async (): Promise<BookingProps> => {

    try {
        const response = await fetchClasses()

        return response.data
    }
    catch (error) {
        return Promise.reject(error)
    }
}

const bookClass = async ({ classId, classHour }: { classId: string, classHour: number }) => {

    revalidateTag(REVALIDATE_TAG.ATHLETE)

    try {
        const response = await bookWorkoutClass({ classId, classHour })

        if(response.status === 200) {
            return BOOKING_REQUEST.SUCCESSFUL
        }
// TODO: check for the already book warning case
        if(response.status === 400) {
            if(response.data === "Δεν μπορείτε να κάνετε κράτηση χωρίς ενεργή συνδρομή!") {
                return BOOKING_REQUEST.SUBSCRIPTION_EXPIRED
            }
            else {
                return BOOKING_REQUEST.ALREADY_BOOKED
            }
        }

        return BOOKING_REQUEST.UNKNOWN_ERROR
    }
    catch (error) {
        return BOOKING_REQUEST.UNKNOWN_ERROR
    }
}

export { getAvailableBookings, bookClass }