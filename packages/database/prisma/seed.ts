/*
 * Lysenkov Viktor (c) 2024
 */

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.create({
    data: {
      login: "admin",
      hashedPassword: bcrypt.hashSync("111", 10),
      email: "admin@spifa.ru",
      surname: "Спифов",
      name: "Николай",
      patronymic: "Владимирович",
      phone: "+7(926)777-88-99",
      dbRoles: ["ADMINISTRATOR"],
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
