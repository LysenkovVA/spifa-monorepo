import z from "zod";
import { File } from "./File";

/**
 * Сущность "Клиент"
 */
export interface Client {
  id: string;
  logo?: File;
  name: string;
  address?: string;
  phone?: string;

  // members Member[]
  //
  // // Список клиента: "Компании"
  // companies Company[]
  //
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Валидация сущности "Клиент"
 */
export const ClientValidationSchema = z.object({
  id: z.string().optional(),
  name: z.string({
    invalid_type_error: 'Поле "Название" не является строкой',
  }),
  address: z
    .string({
      invalid_type_error: 'Поле "Адрес" не является строкой',
    })
    .optional()
    .nullable(),
  phone: z
    .string({
      invalid_type_error: 'Поле "Телефон" не является строкой',
    })
    .optional()
    .nullable(),
});
