/*
 * Lysenkov Viktor (c) 2024
 */

import { signOut } from "next-auth/react";

export async function signOutAction() {
  console.log("SIGN OUT...");
  await signOut({ redirectTo: "/" });
}
