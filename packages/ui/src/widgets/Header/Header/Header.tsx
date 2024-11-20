/*
 * Lysenkov Viktor (c) 2024
 */

"use client";

import { CSSProperties, memo } from "react";
import { Flex } from "antd";
import {
  HEADER_COLOR,
  HEADER_HEIGHT,
  SIDE_MENU_WIDTH,
} from "@/app/config/consts";
import { Logo } from "@/shared/ui/Logo";
import LogoutButton from "../LogoutButton/LogoutButton";
import { Avatar } from "@/shared/ui/Avatar";

export interface HeaderProps {
  style?: CSSProperties;
  onLogout?: () => void;
}

const Header = memo((props: HeaderProps) => {
  const { style, onLogout } = props;
  return (
    <Flex
      style={{
        height: HEADER_HEIGHT,
        backgroundColor: HEADER_COLOR,
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
        <Flex gap={16} align={"center"} justify={"center"}>
          <Avatar />
          <LogoutButton onClick={onLogout} />
        </Flex>
      </Flex>
    </Flex>
  );
});

export default Header;
