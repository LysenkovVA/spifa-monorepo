/*
 * Lysenkov Viktor (c) 2024
 */

import { Client } from "./Client";
import { User } from "./User";
import { ClientRole } from "@prisma/client";

export interface Member {
  id: string;
  client: Client;
  user: User;
  clientRoles: Array<ClientRole>;

  createdAt?: Date;
  updatedAt?: Date;
}
