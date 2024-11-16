/*
 * Lysenkov Viktor (c) 2024
 */

import { ReactNode } from "react";
import { AppLayout } from "@spifa/ui/app";

export default function ProtectedRoutesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <AppLayout>{children}</AppLayout>;
}
