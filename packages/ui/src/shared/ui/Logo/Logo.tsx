/*
 * Lysenkov Viktor (c) 2024
 */

import { CSSProperties, memo } from "react";
import { Image } from "antd";
import logo from "../../assets/png/logo.png";

export interface LogoProps {
  style?: CSSProperties;
}

export const Logo = memo((props: LogoProps) => {
  const { style } = props;
  return (
    <Image
      style={{
        width: "100%",
        ...style,
      }}
      src={logo.src}
      alt={"logo"}
      preview={false}
    />
  );
});

export default Logo;
