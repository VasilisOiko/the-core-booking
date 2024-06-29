
import { Card, Title } from "@/app/components"
import { LocalizedText } from "@/app/locales"

// TODO: Suspense react when fetching
function Overview() {

  return (
    <>
      <Title><LocalizedText id="overview.page.title"/></Title>
      <Card className="overflow-auto">
        

      </Card>

    </>
  )
}

export default Overview