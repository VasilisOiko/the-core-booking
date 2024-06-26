
import {useTranslations} from "next-intl"

type useProps = {
    id: string
    className?: string
}

const RawLocalizedText = (id: string) => {
  const t = useTranslations()
  return t(id)
}

function LocalizedText({ id, className }: useProps) {
  const t = useTranslations()

  return <span className={className}>{t(id)}</span>
}

export { LocalizedText, RawLocalizedText }