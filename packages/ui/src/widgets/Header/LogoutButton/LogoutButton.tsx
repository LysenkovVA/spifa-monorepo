/*
 * Lysenkov Viktor (c) 2024
 */

import { Button, ButtonProps } from "antd";
import { memo } from "react";

export interface LogoutButtonProps extends ButtonProps {
  caption?: string;
  onClick?: () => void;
}

const LogoutButton = memo((props: LogoutButtonProps) => {
  const { caption = "Выйти", ...restProps } = props;

  return <Button {...restProps}>{caption}</Button>;
});

export default LogoutButton;
