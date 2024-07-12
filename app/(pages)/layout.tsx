import "../globals.css"
import type { Metadata } from "next"
import {NextIntlClientProvider} from "next-intl"
import {getLocale, getMessages} from "next-intl/server"
import {
  Flex,
  Layout,
  LocalesDropdown,
  Header,
  Image,
} from "../components"

import { Content } from "antd/lib/layout/layout"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { ConfigProvider } from "antd"
import theme from "../themes/antd/themeConfig"
import grEL from "antd/locale/el_GR"
import enUS from "antd/locale/en_US"

import crossfitLogo from "public/THE+CORE+logo+final.png"
import { isAuthenticated } from "../actions/authentication"
import LANGUAGES from "../utils/constants/languages"
import dayjs from "dayjs"

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The core booking",
  description: "The unofficial booking website of The core",
}

export default async function RootLayout({ children , }: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale()
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  const antdLocale = locale === LANGUAGES.GREEK ? grEL : enUS
  const dayjsLocale = locale === LANGUAGES.GREEK ? "el" : "en"

  require("dayjs/locale/el")
  dayjs.locale(dayjsLocale)


  const logo = (
    <Image
      src={crossfitLogo.src}
      alt="crossfit logo"
      preview={false}
      height={57}
      width={160}
    />
  )

  const Logo = () =>{
    return (
      <Image
        src={crossfitLogo.src}
        alt="crossfit logo"
        preview={false}
        height={57}
        width={160}
      />
    )
  }
  
  return (
    <html lang={locale}>
      <head>

      </head>
      <body>
        <AntdRegistry>
          <ConfigProvider theme={theme} locale={antdLocale}>
            <NextIntlClientProvider messages={messages}>
              {!isAuthenticated() &&
                <Header logo={logo}>
                  <Flex justify="space-between" align="center" gap="middle">
                    <Logo/>
                    <LocalesDropdown />
                  </Flex>
                </Header>
              }
              <Layout>
                <Content>
                  {children}
                </Content>
              </Layout>
            </NextIntlClientProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
