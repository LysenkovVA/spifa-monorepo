/*
 * Lysenkov Viktor (c) 2024
 */

import { ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ReactNode } from "react";
import ru_RU from "antd/lib/locale/ru_RU";
import { ContentWrapper } from "../../ui/ContentWrapper";

/**
 * Провайдер конфигурации для Next.js с поддержкой app router
 * @param children
 * @constructor
 */
export const AntDesignConfigProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ConfigProvider locale={ru_RU}>
      <AntdRegistry>
        <ContentWrapper>{children}</ContentWrapper>
      </AntdRegistry>
    </ConfigProvider>
  );
};
