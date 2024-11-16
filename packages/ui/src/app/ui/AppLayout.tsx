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
import { FOOTER_HEIGHT, HEADER_HEIGHT } from "../config/consts";
import Sider from "antd/es/layout/Sider";
import { ContentWrapper } from "../../shared/ui/ContentWrapper";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <AntHeader
        style={{
          margin: 0,
          padding: 0,
          height: HEADER_HEIGHT,
          backgroundColor: "yellow",
        }}
      >
        <div>Header</div>
        {/*<Header />*/}
      </AntHeader>
      <Content
        style={{
          height: `calc(100vh - 2 * ${HEADER_HEIGHT}px)`,
        }}
      >
        <Layout style={{ borderRadius: "0px 12px 12px 0px" }}>
          <Sider
            style={{
              height: `calc(100vh - ${HEADER_HEIGHT}px - ${FOOTER_HEIGHT}px)`,
              backgroundColor: "red",
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
          margin: 0,
          padding: 0,
          backgroundColor: "orange",
        }}
      >
        <div>Footer</div>
      </AntFooter>
    </Layout>
  );
};

export default AppLayout;
