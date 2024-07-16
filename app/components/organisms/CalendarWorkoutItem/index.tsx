"use client"
import { Text, Title, Tag, Badge, Popover, Space } from "@/app/components"
import { RawLocalizedText } from "@/app/locales"
import { AthletePastBookingsProps } from "@/app/types/athlete"
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons"
import { time } from "console"
import dayjs from "dayjs"
import { useTranslations } from "next-intl"

type Props = {
    workout: AthletePastBookingsProps[0]
}

const CalendarWorkoutItem = ({workout}: Props) => {

    const t = useTranslations("overview.calendar")

    const statusColor = !!workout.cancellationTime ? "error" : workout.isSubstituted ? "warning" : "success"

    const bookedTime = dayjs(workout.bookedTime).format("HH:mm")
    const canceledTime = workout.cancellationTime && dayjs(workout.cancellationTime).format("HH:mm")


    const popoverContent = () => (
        <Space direction="vertical">
            <Text type="secondary">{t("content.bookedOn", {time: bookedTime})}</Text>
            { !!canceledTime && <Text type="secondary">{t("content.canceledOn", {time: bookedTime})}</Text>}
            { !!workout.isSubstituted && <Text italic type="secondary">{t("content.substituted")}</Text>}
        </Space>
    )

    return (
        <Popover
            title={<Title type={statusColor === "error" ? "danger" : statusColor} level={4}>{workout.title}</Title>}
            content={popoverContent}
            trigger={["click", "hover"]}
        >
            <div className="hidden sm:block min-h-full" >
                <Tag
                    icon={ !canceledTime ? <CheckCircleOutlined/> : <CloseCircleOutlined/>}
                    color={statusColor}
                >
                    <div className="text-wrap sm:hidden md:block">
                        {workout.title}
                    </div>
                </Tag>
            </div>
            <div className="sm:hidden min-h-full">
                <Badge status={statusColor}/>
            </div>
        </Popover>    
    )
}

export default CalendarWorkoutItem