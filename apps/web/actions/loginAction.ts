/*
 * Lysenkov Viktor (c) 2024
 */

"use server";

import { User } from "@spifa/database/types";
import { signIn } from "../auth";
import {
  InvalidCredentialsError,
  UserNotFoundError,
} from "../config/authConfig";

export async function loginAction(user: User) {
  try {
    return await signIn("credentials", {
      ...user,
      redirect: false,
    });
  } catch (error) {
    if (
      error instanceof UserNotFoundError ||
      error instanceof InvalidCredentialsError
    ) {
      throw new Error(error?.message);
    }

    throw error;
  }
}
