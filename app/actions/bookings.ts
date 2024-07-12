"use server"
import { bookWorkoutClass, fetchClasses } from "../services/classes"
import { BookingProps } from "../types/bookings"
import { revalidateTag } from "next/cache"
import { REVALIDATE_TAG } from "../utils/constants/network"

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

        return response.status
    }
    catch (error) {
        return Promise.reject(error)
    }
}

export { getAvailableBookings, bookClass }