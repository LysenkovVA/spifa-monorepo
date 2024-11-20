/*
 * Lysenkov Viktor (c) 2024
 */

import NextAuth from "next-auth";
import { authConfig } from "./config/authConfig";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
});

/**
 * Для использования в клиентских компонентах
 */
export { useSession } from "next-auth/react";
