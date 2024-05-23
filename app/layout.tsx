import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import i18n from './locales/init';

import {
  LocalesDropdown,
  Row,
  Col,
  Header,
  Image,
  UserAvatar
} from "./components"
import { Flex, Layout  } from "antd";
import { Content } from 'antd/lib/layout/layout';
import { ConfigProvider } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry'
import theme from './themes/antd/themeConfig'

import crossfitLogo from "public/THE+CORE+logo+final.png"
import { getAuthenticationStatus } from "./utils/helpers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The core booking",
  description: "The unofficial booking website of The core",
};

export default function RootLayout({ children , }: Readonly<{
  children: React.ReactNode;
}>) {

  const logo = (
    <Image
      src={crossfitLogo.src}
      alt="crossfit logo"
      preview={false}
      height={57}
      width={160}
    />
  )

  const isAuthenticated = getAuthenticationStatus();
  
  return (
    <html lang="en">
      <head>

      </head>
        <body>
          <AntdRegistry>
            <ConfigProvider theme={theme}>
                <Header
                  logo={logo}
                >
                  {/* <img
                    src={crossfitLogo.src}
                    alt="crossfit logo"
                    className="absolute inset-5 w-2/12 h-2/12"
                  /> */}
                  <LocalesDropdown />
                  {isAuthenticated && <UserAvatar/>}
                </Header>
              <Layout>
                <Content>
                  {children}
                </Content>
              </Layout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
