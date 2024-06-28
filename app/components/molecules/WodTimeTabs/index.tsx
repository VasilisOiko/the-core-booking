"use client"
// TODO: delete this component

import { Tabs } from "@/app/components"


type WodTimeTabsProps = {
    tabs: {
        label: string
        key: string
        children: React.ReactNode
    }[]
}

const WodTimeTabs = ({ tabs }: WodTimeTabsProps) => {


  return (
    <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        items={tabs}
      />
  )
}

export default WodTimeTabs