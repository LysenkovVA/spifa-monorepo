import { Client } from "./Client";
import { User } from "./User";
import { Company } from "./Company";

export interface File {
  id: string;
  path: string;
  name: string;
  type: string;
  size: number;

  client?: Client;
  user?: User;
  company?: Company;

  createdAt: Date;
  updatedAt: Date;
}
