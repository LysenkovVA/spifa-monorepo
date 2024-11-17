/*
 * Lysenkov Viktor (c) 2024
 */

/*
 * Lysenkov Viktor (c) 2024
 */

"use client";

import { CSSProperties, memo } from "react";
import { Flex } from "antd";
import { HEADER_HEIGHT, SIDE_MENU_WIDTH } from "../../../app/config/consts";
import { Logo } from "../../../shared/ui/Logo";
import { LogoutButton } from "../LogoutButton/LogoutButton";

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
      align={"center"}
      justify={"start"}
    >
      <Logo style={{ width: SIDE_MENU_WIDTH, padding: 16 }} />
      <Flex
        style={{ width: "100%", paddingRight: 16 }}
        align={"center"}
        justify={"end"}
      >
        <LogoutButton />
      </Flex>
    </Flex>
  );
});

export default Header;
