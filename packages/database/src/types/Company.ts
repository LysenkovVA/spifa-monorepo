import { CompanyStatus, CompanyType } from "@prisma/client";
import { File } from "./File";

export interface Company {
  id: string;
  logo?: File;
  name?: string;
  companyType?: CompanyType;
  management?: string;
  fio?: string;
  opf?: string;
  phone?: string;
  address?: string;
  status?: CompanyStatus;
  inn?: string;
  kpp?: string;
  ogrn?: string;
  ogrnDate?: Date;
  okato?: string;
  okpo?: string;
  okfs?: string;
  oktmo?: string;
  okogu?: string;
  okved?: string;
  actualityDate?: Date;
  registrationDate?: Date;
  liquidationDate?: Date;
}
