import { BookingProps, WodClassesProps } from "../../types/bookings"


const getClassesByDate = (bookings: BookingProps, date: string): WodClassesProps[] => (
    bookings
    .filter(booking => booking.date === date)
    .flatMap(booking => booking.wodClasses)
)

const getClassesByTime = (
    bookings: BookingProps,
    date: string,
    time: string,
): WodClassesProps[] =>(
    getClassesByDate(bookings, date)
    .filter(wod => wod.time === time)
)

const getUniqueClassesTitles = (
    bookings: BookingProps,
    date: string
): string[] => (
    Array.from(new Set(
        getClassesByDate(bookings, date)
        .map(wodClass => wodClass.title)
    ))
)

const getClassesByTitle = (
    bookings: BookingProps,
    date: string,
    title: string,
): WodClassesProps[] => (
    getClassesByDate(bookings, date)
    .filter(wod => wod.title === title)
)

export {
    getClassesByDate,
    getClassesByTime,
    getUniqueClassesTitles,
    getClassesByTitle
}