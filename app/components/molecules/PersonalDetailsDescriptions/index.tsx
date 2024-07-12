"use client"
import Loading from "@/app/(pages)/(private)/loading"
import { Descriptions, Text, Space } from "@/app/components"
import { LocalizedText, RawLocalizedText } from "@/app/locales"
import { AthleteProps } from "@/app/types/athlete"
import { PERSONAL_DETAILS_KEYS } from "@/app/utils/constants/identifiers"
import { getDatePeriod, getDayDate } from "@/app/utils/helpers/dateFormatters"
import { DescriptionsProps } from "antd"

type PersonalDetailsDescriptionsProps = {
  athlete: AthleteProps | undefined
}

function PersonalDetailsDescriptions({ athlete }: PersonalDetailsDescriptionsProps) {

  // const t = useTranslations()

  const registrationDate = getDayDate(athlete?.registered)
  const membershipPeriod = getDatePeriod(athlete?.memberships[0]?.starts, athlete?.memberships[0]?.ends)
  
  const items: DescriptionsProps["items"] = [
    {
      key: PERSONAL_DETAILS_KEYS.FIRST_NAME,
      label: RawLocalizedText("personalDetailsDescriptions.items.firstName"),
      children: <Text>{athlete?.firstName}</Text>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.LAST_NAME,
      label: RawLocalizedText("personalDetailsDescriptions.items.lastName"),
      children: <Text>{athlete?.lastName}</Text>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.EMAIL,
      label: RawLocalizedText("personalDetailsDescriptions.items.email"),
      children: <Text>{athlete?.email}</Text>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.PHONE_NUMBER,
      label: RawLocalizedText("personalDetailsDescriptions.items.phoneNumber"),
      children: <Text>{athlete?.phone}</Text>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.ADDRESS,
      label: RawLocalizedText("personalDetailsDescriptions.items.address"),
      children: <Text>{athlete?.address}</Text>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.REGISTERED,
      label: RawLocalizedText("personalDetailsDescriptions.items.registered"),
      children: <Text>{`${RawLocalizedText(`days.${registrationDate.dayOfWeek}`)} ${registrationDate.formattedDate}`}</Text>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.SUBSCRIPTION,
      label: RawLocalizedText("personalDetailsDescriptions.items.membership.subscription"),
      children: <Text>{athlete?.memberships[0]?.description}</Text>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.MEMBERSHIP,
      label: RawLocalizedText("personalDetailsDescriptions.items.membership.label"),
      children: (
        <Space direction="vertical">

          <Text>
            <Text strong>
              <LocalizedText id="personalDetailsDescriptions.items.membership.starts"/>
            </Text>
            {` ${RawLocalizedText(`days.${membershipPeriod.start.dayOfWeek}`)} ${membershipPeriod.start.formattedDate}`}
          </Text>

          <Text>
            <Text strong>
              <LocalizedText id="personalDetailsDescriptions.items.membership.ends"/>
            </Text>
            {` ${RawLocalizedText(`days.${membershipPeriod.end.dayOfWeek}`)} ${membershipPeriod.end.formattedDate}`}
          </Text>

        </Space>
      ),
    },
  ]

  return (
    <Descriptions title={RawLocalizedText("personalDetailsDescriptions.title")} bordered items={items} />
  )
}

export default PersonalDetailsDescriptions