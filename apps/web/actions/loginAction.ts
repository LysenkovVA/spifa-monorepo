/*
 * Lysenkov Viktor (c) 2024
 */

"use server";

import { User } from "@spifa/database/types";
import { signIn } from "../auth";

export async function loginAction(user: User) {
  try {
    await signIn("credentials", {
      ...user,
      redirect: false,
    });
  } catch (error) {
    console.log("ERROR at loginAction", JSON.stringify(error, null, 2));
  }
}
