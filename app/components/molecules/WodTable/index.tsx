"use client"
// TODO: delete this component
import { Button, Table, Text } from "@/app/components"
import { BOOKINGS } from "@/app/utils/constants/dummy/bookings"
import { TableProps } from "antd"
import { ColumnsType } from "antd/es/table"


type WodClassesProps = {
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
}[]

const WodTable = () => {

    const wodClasses = BOOKINGS
    .filter(booking => booking.date === "2024-06-19T09:00:00Z")
    .flatMap(booking => booking.wodClasses)

    
    const rows = wodClasses.map((wodClass) => ({
        Time: wodClass.time,
        Workouts: wodClass.title,
        Action: <><Button>Make a booking</Button></>
      }))

    const columns: TableProps["columns"] = [
        {
            title: "Time",
            dataIndex: "Time",
            key: "Time",
            onCell: (record, rowIndex) => {
                const index = rowIndex || 0
                const sameTimeCells = rows.filter((row) => row.Time === record.Time).length
                const firstCellOfGroup = rows.findIndex((row) => row.Time === record.Time)
                
                console.log(index, firstCellOfGroup, sameTimeCells, index === firstCellOfGroup ? sameTimeCells : 0)
                if(sameTimeCells > 1) {
                    return {
                        rowSpan:  index === firstCellOfGroup ? sameTimeCells : 0
                    }
                }
                return {
                    rowSpan: 1
                }
            }
        },
        {
            title: "Workouts",
            dataIndex: "Workouts",
            key: "Workouts",
        },
        {
            title: "Action",
            dataIndex: "Action",
            key: "Action",
        },
    ]

    return (
        <Table
            pagination={false}
            showHeader={false}
            columns={columns}
            dataSource={rows}
        />
    )
}

export default WodTable