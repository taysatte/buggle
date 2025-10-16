import { PrismaClient } from "../generated/prisma";

declare global {
  // allow global `var` for dev hot-reloading
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma || (global.prisma = new PrismaClient({ log: ["query"] }));

export default prisma;
