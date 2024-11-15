import z from "zod";
import { DBRole } from "@prisma/client";
import { File } from "./File";
import { Member } from "./Member";

/**
 * Сущность "Пользователь"
 */
export interface User {
  id: string;
  avatar?: File;
  login?: string;
  hashedPassword?: string;
  surname?: string;
  name?: string;
  patronymic?: string;
  email?: string;
  phone?: string;
  dbRoles: Array<DBRole>;

  members: Array<Member>;

  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * Схема валидации сущности "Пользователь"
 * при создании пользователя
 */
export const UserValidationSchema = z.object({
  id: z.string().optional(),
  login: z.string({
    required_error: 'Поле "Логин" не указано',
    invalid_type_error: 'Поле "Логин" не является строкой',
  }),
  password: z.string({
    required_error: 'Поле "Пароль" не указано',
    invalid_type_error: 'Поле "Пароль" не является строкой',
  }),
  surname: z
    .string({
      invalid_type_error: 'Поле "Фамилия" не является строкой',
    })
    .optional()
    .nullable(),
  name: z
    .string({
      invalid_type_error: 'Поле "Имя" не является строкой',
    })
    .optional()
    .nullable(),
  patronymic: z
    .string({
      invalid_type_error: 'Поле "Отчество" не является строкой',
    })
    .optional()
    .nullable(),
  email: z
    .string({
      invalid_type_error: 'Поле "E-mail" не является строкой',
    })
    .email({ message: 'Поле "E-mail" некорректно' })
    .optional()
    .nullable(),
  phone: z
    .string({
      invalid_type_error: 'Поле "Телефон" не является строкой',
    })
    .optional()
    .nullable(),
  avatarUrl: z
    .string({
      invalid_type_error: 'Поле "Аватар" не является ссылкой',
    })
    .optional()
    .nullable(),
});

/**
 * Схема валидации сущности "Пользователь"
 * при редактировании профиля
 */
export const ProfileValidationSchema = z.object({
  id: z.string().cuid(),
  surname: z
    .string({
      invalid_type_error: 'Поле "Фамилия" не является строкой',
    })
    .optional()
    .nullable(),
  name: z
    .string({
      invalid_type_error: 'Поле "Имя" не является строкой',
    })
    .optional()
    .nullable(),
  patronymic: z
    .string({
      invalid_type_error: 'Поле "Отчество" не является строкой',
    })
    .optional()
    .nullable(),
  email: z
    .string({
      invalid_type_error: 'Поле "E-mail" не является строкой',
    })
    .email({ message: 'Поле "E-mail" некорректно' })
    .optional()
    .nullable(),
  phone: z
    .string({
      invalid_type_error: 'Поле "Телефон" не является строкой',
    })
    .optional()
    .nullable(),
  avatarUrl: z
    .string({
      invalid_type_error: 'Поле "Аватар" не является ссылкой',
    })
    .optional()
    .nullable(),
});
