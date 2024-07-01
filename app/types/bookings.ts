export type WodClassesProps = {
    id: string
    dailyClassesId: number
    gymId: string
    title: string
    time: string
    hour: number
    minutes: number
    capacity: number
    booked: number
    substitutions: number
    bookings: any[]
}

export type BookingProps = {
    id: number
    gymId: string
    date: string
    wodClasses: WodClassesProps[]
}[]