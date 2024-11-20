/*
 * Lysenkov Viktor (c) 2024
 */
"use client";
import { ReactNode } from "react";
import { AppLayout } from "@spifa/ui/app";
import { signOutAction } from "../../actions/signOut";

export default function ProtectedRoutesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <AppLayout onLogout={signOutAction}>{children}</AppLayout>;
}
