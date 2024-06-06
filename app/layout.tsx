import "./globals.css";
import type { Metadata } from "next";

import {
  Flex,
  Space,
  Layout,
  LocalesDropdown,
  Header,
  Image,
  UserProfileMenu
} from "./components"

import { Content } from 'antd/lib/layout/layout'
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry'
import theme from './themes/antd/themeConfig'

import crossfitLogo from "public/THE+CORE+logo+final.png"
import useAuth from "./hooks/useAuth";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The core booking",
  description: "The unofficial booking website of The core",
};

export default function RootLayout({ children , }: Readonly<{
  children: React.ReactNode;
}>) {

  const { isAuthenticated } = useAuth()

  const logo = (
    <Image
      src={crossfitLogo.src}
      alt="crossfit logo"
      preview={false}
      height={57}
      width={160}
    />
  )
  
  return (
    <html lang="en">
      <head>

      </head>
        <body>
          <AntdRegistry>
            <ConfigProvider theme={theme}>
              <Header logo={logo}>
                 <Flex justify="center" align="center" gap="middle">
                    <LocalesDropdown />
                    {isAuthenticated() && <UserProfileMenu/>}
                </Flex>
              </Header>
              {/* <Layout>
                <Content> */}
                  {children}
                {/* </Content>
              </Layout> */}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
