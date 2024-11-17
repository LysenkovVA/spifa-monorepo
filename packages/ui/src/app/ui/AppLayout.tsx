/*
 * Lysenkov Viktor (c) 2024
 */

// TODO

import { ReactNode } from "react";
import { Layout } from "antd";
import {
  Content,
  Footer as AntFooter,
  Header as AntHeader,
} from "antd/es/layout/layout";
import {
  CONTENT_MARGIN,
  CONTENT_PADDING,
  FOOTER_HEIGHT,
  FOOTER_MARGIN,
  FOOTER_PADDING,
  HEADER_HEIGHT,
  HEADER_MARGIN,
  HEADER_PADDING,
  SIDE_MENU_MARGIN,
  SIDE_MENU_PADDING,
} from "../config/consts";
import Sider from "antd/es/layout/Sider";
import { ContentWrapper } from "../../shared/ui/ContentWrapper";
import { Header } from "../../widgets";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <AntHeader
        style={{
          margin: HEADER_MARGIN,
          padding: HEADER_PADDING,
          height: HEADER_HEIGHT,
        }}
      >
        <Header />
      </AntHeader>
      <Content
        style={{
          height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
          margin: CONTENT_MARGIN,
          padding: CONTENT_PADDING,
        }}
      >
        <Layout style={{ borderRadius: "0px 12px 12px 0px" }}>
          <Sider
            style={{
              height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px - 2*${SIDE_MENU_MARGIN}px)`,
              backgroundColor: "red",
              margin: SIDE_MENU_MARGIN,
              padding: SIDE_MENU_PADDING,
            }}
            width={200}
          >
            <div>Sider</div>
          </Sider>
          <ContentWrapper
            style={{
              height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px - 16px)`,
              backgroundColor: "gray",
            }}
            align={"top"}
            justify={"start"}
          >
            {children}
          </ContentWrapper>
        </Layout>
      </Content>
      <AntFooter
        style={{
          height: FOOTER_HEIGHT,
          margin: FOOTER_MARGIN,
          padding: FOOTER_PADDING,
          backgroundColor: "orange",
        }}
      >
        <div>Footer</div>
      </AntFooter>
    </Layout>
  );
};

export default AppLayout;
