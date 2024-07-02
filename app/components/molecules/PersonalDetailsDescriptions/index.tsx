"use client"
import Loading from "@/app/(pages)/(private)/loading"
import { Descriptions, Text, Space } from "@/app/components"
import { LocalizedText, RawLocalizedText } from "@/app/locales"
import { AthleteProps } from "@/app/types/athlete"
import LANGUAGES from "@/app/utils/constants/languages"
import { getDatePeriod, getLocalizedDayDate } from "@/app/utils/helpers/dateFormatters"
import { DescriptionsProps } from "antd"
import dayjs from "dayjs"

type PersonalDetailsDescriptionsProps = {
  athlete: AthleteProps | undefined
}

function PersonalDetailsDescriptions({ athlete }: PersonalDetailsDescriptionsProps) {

  const registrationDate = getLocalizedDayDate(athlete?.registered)
  const membershipPeriod = getDatePeriod(athlete?.memberships[0]?.starts, athlete?.memberships[0]?.ends)
  
  // TODO: set proper keys

  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: RawLocalizedText("personalDetailsDescriptions.items.firstName"),
      children: <Text>{athlete?.firstName}</Text>,
    },
    {
      key: "2",
      label: RawLocalizedText("personalDetailsDescriptions.items.lastName"),
      children: <Text>{athlete?.lastName}</Text>,
    },
    {
      key: "3",
      label: RawLocalizedText("personalDetailsDescriptions.items.email"),
      children: <Text>{athlete?.email}</Text>,
    },
    {
      key: "4",
      label: RawLocalizedText("personalDetailsDescriptions.items.phoneNumber"),
      children: <Text>{athlete?.phone}</Text>,
    },
    {
      key: "5",
      label: RawLocalizedText("personalDetailsDescriptions.items.registered"),
      children: <Text>{`${registrationDate.dayOfWeek} ${registrationDate.formattedDate}`}</Text>,
    },
    {
      key: "6",
      label: RawLocalizedText("personalDetailsDescriptions.items.address"),
      children: <Text>{athlete?.address}</Text>,
    },
    {
      key: "8",
      label: RawLocalizedText("personalDetailsDescriptions.items.membership.subscription"),
      children: <Text>{athlete?.memberships[0]?.description}</Text>,
    },
    {
      key: "7",
      label: RawLocalizedText("personalDetailsDescriptions.items.membership.label"),
      children: (
        <Space direction="vertical">

          <Text>
            <Text strong>
              <LocalizedText id="personalDetailsDescriptions.items.membership.starts"/>
            </Text>
            {` ${membershipPeriod.start.dayOfWeek} ${membershipPeriod.start.formattedDate}`}
          </Text>

          <Text>
            <Text strong>
              <LocalizedText id="personalDetailsDescriptions.items.membership.ends"/>
            </Text>
            {` ${membershipPeriod.end.dayOfWeek} ${membershipPeriod.end.formattedDate}`}
          </Text>

        </Space>
      ),
    },
  ]


  return athlete ? (
    <Descriptions title={RawLocalizedText("personalDetailsDescriptions.title")} bordered items={items} />
  ) : (
    <Loading />
  )
}

export default PersonalDetailsDescriptions