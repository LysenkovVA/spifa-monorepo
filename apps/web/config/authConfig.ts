import CredentialsProvider from "next-auth/providers/credentials";
import type { Adapter } from "next-auth/adapters"; // Нужно это добавить, чтоб не было ошибки в adapter https://stackoverflow.com/questions/76503606/next-auth-error-adapter-is-not-assignable-to-type-adapter-undefined
import { PrismaAdapter } from "@auth/prisma-adapter";
import { CredentialsSignin, NextAuthConfig } from "next-auth";
import bcrypt from "bcryptjs";
import { User as UserEntity } from "@spifa/database/types";
import prisma from "@spifa/database";

// ❗️Все ошибки должны быть обработаны в loginAction
export class UserNotFoundError extends CredentialsSignin {
  code = "user_not_found";
  message: string;

  constructor(message?: string) {
    super(message ?? "Пользователь не найден");
    this.message = message ?? "Пользователь не найден";
  }
}

export class InvalidCredentialsError extends CredentialsSignin {
  code = "invalid_credentials";
  message: string;

  constructor(message?: string) {
    super(message ?? "Неверный пароль");
    this.message = message ?? "Неверный пароль";
  }
}

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma) as Adapter,
  pages: {
    signIn: "/",
  },
  session: {
    // Для Credentials поддерживается только эта стратегия
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 1 день
  },
  secret: process.env.AUTH_SECRET,
  debug: true,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        login: {
          label: "Логин",
          type: "text",
        },
        password: {
          label: "Пароль",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials.login || !credentials.password) {
          return null;
        }

        const candidate = await prisma.user.findFirst({
          where: {
            login: credentials.login!,
          },
          include: {
            members: { include: { client: true, user: true } },
          },
        });

        if (!candidate) {
          throw new UserNotFoundError(
            `Пользователь '${credentials.login}' не найден`,
          );
        }

        const match = bcrypt.compareSync(
          String(credentials.password),
          candidate.hashedPassword,
        );

        if (!match) {
          throw new InvalidCredentialsError();
        }

        const { hashedPassword, ...userWithoutPass } = candidate;

        return userWithoutPass as UserEntity;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      try {
        if (user) {
          token.id = user.id!;
          token.login = user.login!;
          token.surname = user.surname;
          token.name = user.name;
          token.patronymic = user.patronymic;
          token.email = user.email;
          token.phone = user.phone;
          token.dbRoles = user.dbRoles;
          token.members = user.members;
        }
        return token;
      } catch (error) {
        console.log("ERROR JWT Callback (authConfig)", JSON.stringify(error));
        return null;
      }
    },
    // Для использования в клиентских приложениях
    async session({ session, token }) {
      try {
        if (session.user) {
          session.user.id = token.id;
          session.user.login = token.login!;
          session.user.surname = token.surname;
          session.user.name = token.name!;
          session.user.patronymic = token.patronymic;
          session.user.email = token.email!;
          session.user.phone = token.phone!;
          session.user.dbRoles = token.dbRoles;
          session.user.members = token.members;
        }

        return session;
      } catch (error) {
        console.log(
          "ERROR Session Callback (authConfig)",
          JSON.stringify(error),
        );
        return session;
      }
    },
  },
};
