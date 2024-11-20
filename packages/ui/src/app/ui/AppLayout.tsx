/*
 * Lysenkov Viktor (c) 2024
 */

// TODO

import { memo, ReactNode } from "react";
import { Layout } from "antd";
import {
  Content,
  Footer as AntFooter,
  Header as AntHeader,
} from "antd/es/layout/layout";
import {
  CONTENT_BOTTOM_MARGIN,
  CONTENT_PADDING,
  CONTENT_TOP_MARGIN,
  FOOTER_HEIGHT,
  FOOTER_MARGIN,
  FOOTER_PADDING,
  HEADER_HEIGHT,
  HEADER_MARGIN,
  HEADER_PADDING,
  LAYOUT_BG_COLOR,
  SIDE_MENU_BOTTOM_MARGIN,
  SIDE_MENU_PADDING,
  SIDE_MENU_TOP_MARGIN,
} from "../config/consts";
import Sider from "antd/es/layout/Sider";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { SideMenu } from "@/widgets/SideMenu";

export interface AppLayoutProps {
  children: ReactNode;
  onLogout?: () => void;
}

const AppLayout = memo(({ children, onLogout }: AppLayoutProps) => {
  return (
    <Layout style={{ backgroundColor: LAYOUT_BG_COLOR }}>
      <AntHeader
        style={{
          margin: HEADER_MARGIN,
          padding: HEADER_PADDING,
          height: HEADER_HEIGHT,
        }}
      >
        <Header onLogout={onLogout} />
      </AntHeader>
      <Content
        style={{
          height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
          margin: `${CONTENT_TOP_MARGIN} 0 ${CONTENT_BOTTOM_MARGIN} 0`,
          padding: CONTENT_PADDING,
        }}
      >
        <Layout style={{ backgroundColor: LAYOUT_BG_COLOR }}>
          <Sider
            style={{
              height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px - ${SIDE_MENU_TOP_MARGIN}px - ${SIDE_MENU_BOTTOM_MARGIN}px)`,
              backgroundColor: LAYOUT_BG_COLOR, // TODO remove!
              margin: `${SIDE_MENU_TOP_MARGIN} 0 ${SIDE_MENU_BOTTOM_MARGIN} 0`,
              padding: SIDE_MENU_PADDING,
            }}
            width={200}
          >
            <SideMenu />
          </Sider>
          <div
            style={{
              width: "100%",
              height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px - ${CONTENT_TOP_MARGIN}px - ${CONTENT_BOTTOM_MARGIN}px)`,
              backgroundColor: "whitesmoke", // TODO remove!
              borderRadius: 12,
              marginTop: CONTENT_TOP_MARGIN,
              marginBottom: CONTENT_BOTTOM_MARGIN,
            }}
          >
            {children}
          </div>
        </Layout>
      </Content>
      <AntFooter
        style={{
          height: FOOTER_HEIGHT,
          margin: FOOTER_MARGIN,
          padding: FOOTER_PADDING,
        }}
      >
        <Footer />
      </AntFooter>
    </Layout>
  );
});

export default AppLayout;
