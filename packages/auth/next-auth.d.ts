/**
 * Расширение стандартных интерфейсов AuthJS
 */

import { User as UserEntity } from "@spifa/database/types";
import { DefaultJWT } from "next-auth/jwt";
import { DefaultSession } from "next-auth";

/**
 * https://authjs.dev/getting-started/typescript#module-augmentation
 */
export declare module "next-auth" {
  interface Session extends DefaultSession {
    user: UserEntity;
  }

  interface User extends UserEntity {}
}

export declare module "next-auth/jwt" {
  interface JWT extends UserEntity, DefaultJWT {}
}
