export type AthleteProps = {
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

export type AthletePastBookingsProps = {
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