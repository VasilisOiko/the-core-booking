import { fetchClasses } from "../services/classes"
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

export { getAvailableBookings }