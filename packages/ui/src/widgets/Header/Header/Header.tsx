/*
 * Lysenkov Viktor (c) 2024
 */

/*
 * Lysenkov Viktor (c) 2024
 */

"use client";

import { CSSProperties, memo } from "react";
import { Flex } from "antd";
import { HEADER_HEIGHT } from "../../../app/config/consts";

export interface HeaderProps {
  style?: CSSProperties;
}

export const Header = memo((props: HeaderProps) => {
  const { style } = props;
  return (
    <Flex
      style={{
        height: HEADER_HEIGHT,
        backgroundColor: "darkgray",
        width: "100%",
        ...style,
      }}
    >
      <div>Header</div>
    </Flex>
  );
});

export default Header;
