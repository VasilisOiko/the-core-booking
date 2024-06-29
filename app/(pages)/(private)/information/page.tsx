import { Card, Title } from "@/app/components"
import { LocalizedText } from "@/app/locales"

// TODO: Suspense react when fetching
function Information() {

  return (
    <>
      <Title><LocalizedText id="information.page.title"/></Title>
      <Card className="overflow-auto">
        

      </Card>

    </>
  )
}

export default Information