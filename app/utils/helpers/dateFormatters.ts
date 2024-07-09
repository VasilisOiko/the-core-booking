import dayjs from "dayjs"
import LANGUAGES from "../constants/languages"
import { RawLocalizedText } from "@/app/locales"

/**
 * Formats the given value to the format 'YYYY-MM-DDT09:00:00[Z]'
 *
 * @param value the value to be formatted
 * @return formatted string
 */
const formatValueToBookingsDate = (value: any) => {
    return dayjs(value).format("YYYY-MM-DDT09:00:00[Z]")
}

const getLocalizedDayDate = (date: string | undefined) => {

    if (!date) {
        return { dayOfWeek: "", formattedDate: "" }
    }

    const dateObject = dayjs(date)

    const dayOfWeek  = RawLocalizedText(`days.${dateObject.locale(LANGUAGES.GREEK).format("dddd")}`)
    const formattedDate  = dateObject.format("DD-MM-YYYY")

    return { dayOfWeek , formattedDate }
}

const getDayDate = (date: string | undefined) => {

    if (!date) {
        return { dayOfWeek: "", formattedDate: "" }
    }

    const dateObject = dayjs(date)

    const dayOfWeek  = dateObject.locale(LANGUAGES.GREEK).format("dddd")
    const formattedDate  = dateObject.format("DD-MM-YYYY")

    return { dayOfWeek , formattedDate }
}

const getDatePeriod = (startDate: string | undefined, endDate: string | undefined) => {
    if (!startDate || !endDate) {
        return {
            start: {
                dayOfWeek: "",
                formattedDate: ""
            },
            end: {
                dayOfWeek: "",
                formattedDate: ""
            }
        }
    }

    const { dayOfWeek: startDayOfWeek, formattedDate: startFormattedDate } = getLocalizedDayDate(startDate)
    const { dayOfWeek: endDayOfWeek, formattedDate: endFormattedDate } = getLocalizedDayDate(endDate)

    return {
        start: {
            dayOfWeek: startDayOfWeek,
            formattedDate: startFormattedDate
        },
        end: {
            dayOfWeek: endDayOfWeek,
            formattedDate: endFormattedDate
        }
    }
}

export { formatValueToBookingsDate, getLocalizedDayDate, getDatePeriod, getDayDate }