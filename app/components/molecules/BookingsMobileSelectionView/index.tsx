"use client"
import { useEffect, useState } from "react"
import { BookingProps, WodClassesProps } from "@/app/types/bookings"
import { BookingsCardsGrid, Col, DatePicker, Row, Select, SkeletonButton } from "@/app/components"
import { getClassesByTitle, getUniqueClassesTitles } from "@/app/utils/helpers/bookingFilters"
import { formatValueToBookingsDate, getDayDate } from "@/app/utils/helpers/dateFormatters"
import { useTranslations } from "next-intl"
import dayjs from "dayjs"

type BookingPanelProps = {
    bookings: BookingProps
}

type ClassesOptions = {
    value: string
    label: string
}[]

type SelectedClassBookings = {
    title: string
    bookings: WodClassesProps[]
}

function BookingsMobileSelectionView({ bookings }: BookingPanelProps) {

    const t = useTranslations()

    const defaultDate = dayjs(bookings[0].date)

    const [selectedDate, setSelectedDate] = useState<string>(bookings[0].date)
    const [classesOptions, setClassesOptions] = useState<ClassesOptions>()
    const [selectedClass, setSelectedClass] = useState<SelectedClassBookings>()

    const getClassesOptionsPerDate = (date: string) => getUniqueClassesTitles(bookings, date)
    .map((title: string) => ({
        label: title,
        value: title,
    }))

    const handleDateChange = (value: any) => {
        setSelectedDate(formatValueToBookingsDate(value))
    }

    const handleClassChange = (value: any) => {
        setSelectedClass({
            title: value,
            bookings: getClassesByTitle(bookings, selectedDate, value)
        })
    }

    const dateView = (value: any) => {
        const { dayOfWeek, formattedDate } = getDayDate(value)

        return `${t(`days.${dayOfWeek}`)} ${formattedDate}`
    }

    const disabledDates = (current: any): boolean => {
        const availableDates = new Set(bookings.map(booking => dayjs(booking.date).format('YYYY-MM-DD')));
        const currentDate = dayjs(current).format('YYYY-MM-DD');

        return !availableDates.has(currentDate);
    }

    useEffect(() => {
        const updatedClassesOptions = getClassesOptionsPerDate(selectedDate)
        
        setClassesOptions(updatedClassesOptions)

        setSelectedClass((prevState) => {

            // If a previously selected class is available in the updated classes
            // keep the selected class
            const hasSameClass = updatedClassesOptions.some((classes) => classes.value === prevState?.title)

            const updatedClassTitle = hasSameClass && !!prevState ? prevState.title : updatedClassesOptions[0].value

            const updatedBookings = getClassesByTitle(bookings, selectedDate, updatedClassTitle)

            return ({
                title: updatedClassTitle,
                bookings: updatedBookings
            })
        })
    
      return () => {
        setClassesOptions(undefined)
      }
    }, [selectedDate])

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <DatePicker
                        className="min-w-full"
                        size="large"
                        picker="date"
                        defaultValue={defaultDate}
                        allowClear={false}
                        format={dateView}
                        disabledDate={disabledDates}
                        onChange={handleDateChange}
                    />
                </Col>
                <Col span={24}>
                { !!classesOptions ?
                    <Select
                        className="min-w-full"
                        size="large"
                        value={selectedClass?.title}
                        options={classesOptions}
                        onChange={handleClassChange}
                    />
                    :
                    <SkeletonButton block active />
                }
                </Col>
                <Col span={24}>
                    <BookingsCardsGrid bookings={selectedClass?.bookings}/>
                </Col>
            </Row>
        </>
    )
}

export default BookingsMobileSelectionView