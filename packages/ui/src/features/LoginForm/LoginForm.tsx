/*
 * Lysenkov Viktor (c) 2024
 */

"use client";

import { CSSProperties, memo } from "react";
import { User } from "@spifa/database/types";
import { Button, Card, Flex, Form, Input, Typography } from "antd";
import { Logo } from "@/shared/ui/Logo";

export interface LoginFormProps {
  style?: CSSProperties;
  error?: string;
  onSubmit?: (values: User) => void;
}

const LoginForm = memo((props: LoginFormProps) => {
  const { style, error, onSubmit } = props;

  return (
    <Flex
      vertical
      align={"center"}
      justify={"center"}
      gap={16}
      style={{ width: 400, ...style }}
    >
      <Logo
        style={{
          width: "70%",
        }}
      />
      <Card style={{ width: "100%" }}>
        <Form
          name="login"
          style={{ width: "100%" }}
          initialValues={{ remember: false }}
          onFinish={onSubmit}
        >
          <Form.Item
            name="login"
            rules={[{ required: true, message: "Пожалуйста укажите login" }]}
          >
            <Input style={{ width: "100%" }} placeholder="Логин" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Пожалуйста укажите пароль" }]}
          >
            <Input
              style={{ width: "100%" }}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          {/*<Form.Item>*/}
          {/*  <Flex justify="space-between" align="center">*/}
          {/*    <Form.Item name="remember" valuePropName="checked" noStyle>*/}
          {/*      <Checkbox>Запомнить</Checkbox>*/}
          {/*    </Form.Item>*/}
          {/*    /!*<a href="">Восстановить пароль</a>*!/*/}
          {/*  </Flex>*/}
          {/*</Form.Item>*/}
          <Form.Item style={{ textAlign: "center" }}>
            {error && (
              <Typography.Text type={"danger"}>{error}</Typography.Text>
            )}
            <Button block type="primary" htmlType="submit">
              Войти
            </Button>
            {/*<Flex*/}
            {/*  style={{ paddingTop: 16 }}*/}
            {/*  gap={4}*/}
            {/*  justify={"center"}*/}
            {/*  align={"center"}*/}
            {/*>*/}
            {/*  {"или"}*/}
            {/*  <a href="/register">зарегистрироваться</a>*/}
            {/*</Flex>*/}
          </Form.Item>
        </Form>
      </Card>
    </Flex>
  );
});

export default LoginForm;
