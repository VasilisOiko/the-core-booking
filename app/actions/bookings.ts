import { bookWorkoutClass, fetchClasses } from "../services/classes"
import { BookingProps } from "../types/bookings"

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

    try {
        const response = await bookWorkoutClass({ classId, classHour })

        return response.status
    }
    catch (error) {
        return Promise.reject(error)
    }
}

export { getAvailableBookings, bookClass }