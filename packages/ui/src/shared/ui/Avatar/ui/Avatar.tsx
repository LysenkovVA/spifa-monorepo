/*
 * Lysenkov Viktor (c) 2024
 */

"use client";

import React, { memo } from "react";
import { Avatar as AntAvatar, Flex, Typography } from "antd";

export interface AvatarProps {}

const Avatar = memo(() => {
  return (
    <Flex align={"center"} justify={"center"} gap={4}>
      <Typography.Text type={"secondary"}>{"userLogin"}</Typography.Text>
      <AntAvatar size={50} shape={"circle"}>
        {"USER"}
      </AntAvatar>
    </Flex>
  );
});

export default Avatar;
