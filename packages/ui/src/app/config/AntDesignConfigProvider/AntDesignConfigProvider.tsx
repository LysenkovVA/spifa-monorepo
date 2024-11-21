/*
 * Lysenkov Viktor (c) 2024
 */

import { App, ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ReactNode } from "react";
import ru_RU from "antd/lib/locale/ru_RU";

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
      <App
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <AntdRegistry>{children}</AntdRegistry>
      </App>
    </ConfigProvider>
  );
};

// Для глобального использования различных уведомлений
// через хук AntDApp.useApp()
export { App as AntDApp };
