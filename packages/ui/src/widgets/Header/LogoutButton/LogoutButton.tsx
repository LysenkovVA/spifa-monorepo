/*
 * Lysenkov Viktor (c) 2024
 */

import { Button, ButtonProps } from "antd";

export interface LogoutButtonProps extends ButtonProps {
  caption?: string;
}

export function LogoutButton(props: LogoutButtonProps) {
  const { caption = "Выйти", ...restProps } = props;

  return <Button {...restProps}>{caption}</Button>;
}
