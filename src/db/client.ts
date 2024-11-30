import { PrismaClient } from "@prisma/client";

// Extend the NodeJS global type
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query"] : [],
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
