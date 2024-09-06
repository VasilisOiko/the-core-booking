import { Descriptions, Space, SkeletonInput } from "@/app/components"
import { PERSONAL_DETAILS_KEYS } from "@/app/utils/constants/identifiers"
import { DescriptionsProps } from "antd"

function PersonalDetailsDescriptionsSkeleton() {
  
  const items: DescriptionsProps["items"] = [
    {
      key: PERSONAL_DETAILS_KEYS.FIRST_NAME,
      label: <SkeletonInput size="small"/>,
      children: <SkeletonInput active size="small"/>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.LAST_NAME,
      label: <SkeletonInput size="small"/>,
      children: <SkeletonInput active size="small"/>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.EMAIL,
      label: <SkeletonInput size="small"/>,
      children: <SkeletonInput active size="small"/>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.PHONE_NUMBER,
      label: <SkeletonInput size="small"/>,
      children: <SkeletonInput active size="small"/>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.ADDRESS,
      label: <SkeletonInput size="small"/>,
      children: <SkeletonInput active size="small"/>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.REGISTERED,
      label: <SkeletonInput size="small"/>,
      children: <SkeletonInput active size="small"/>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.SUBSCRIPTION,
      label: <SkeletonInput size="small"/>,
      children: <SkeletonInput active size="small"/>,
    },
    {
      key: PERSONAL_DETAILS_KEYS.MEMBERSHIP,
      label: <SkeletonInput size="small"/>,
      children: (
        <Space direction="vertical">
            <SkeletonInput active size="small"/>
            <SkeletonInput active size="small"/>
        </Space>
      ),
    },
  ]

  return (
    <Descriptions title={<SkeletonInput size="large"/>} bordered items={items} />
  )
}

export default PersonalDetailsDescriptionsSkeleton