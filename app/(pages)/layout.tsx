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
  UserProfileMenu,
  SkeletonAvatar
} from "../components"

import { Content } from "antd/lib/layout/layout"
import { ConfigProvider } from "antd"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import theme from "../themes/antd/themeConfig"

import crossfitLogo from "public/THE+CORE+logo+final.png"
import { isAuthenticated } from "../actions/authentication"
import { Suspense } from "react"
import Loading from "./(private)/loading"

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
          <ConfigProvider theme={theme}>
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
