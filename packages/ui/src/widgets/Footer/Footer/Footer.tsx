/*
 * Lysenkov Viktor (c) 2024
 */

"use client";

import { CSSProperties, memo } from "react";
import { Flex, Typography } from "antd";
import { FOOTER_COLOR, FOOTER_HEIGHT } from "@/app/config/consts";

export interface FooterProps {
  style?: CSSProperties;
}

const Footer = memo((props: FooterProps) => {
  const { style } = props;
  return (
    <Flex
      style={{
        width: "100%",
        height: FOOTER_HEIGHT,
        backgroundColor: FOOTER_COLOR,
        ...style,
      }}
      align={"center"}
      justify={"center"}
    >
      <Typography.Text style={{ color: "white" }}>
        {"ООО СПИФА"}
      </Typography.Text>
    </Flex>
  );
});

export default Footer;
