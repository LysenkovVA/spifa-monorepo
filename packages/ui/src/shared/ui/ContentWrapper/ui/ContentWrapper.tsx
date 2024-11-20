import { CSSProperties, memo, ReactNode } from "react";
import { Col, Row, RowProps } from "antd";

export interface PublicPageWrapperProps extends Omit<RowProps, "children"> {
  style: CSSProperties;
  // height: string | number | undefined;
  children?: ReactNode;
}

/**
 * Обертка для контента для выравнивания по ширине на 100%
 * Высота по умолчанию: 100vh
 */
const ContentWrapper = memo((props: PublicPageWrapperProps) => {
  const { children, style, ...restProps } = props;

  return (
    <Row
      style={{
        width: "100%",
        ...style,
      }}
      {...restProps}
    >
      <Col span={24}>{children}</Col>
    </Row>
  );
});

export default ContentWrapper;
